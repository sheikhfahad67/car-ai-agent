import { Part } from '@google/generative-ai'
import { generationConfig, modelClient } from './config/google.config'
import { toolConfig, tools } from './config/tools.config'
import { INIT_HISTORY } from './constants/constants'
import { GetUserInput } from './constants/get-user-informtion'
import { CarPreference, TOOLS_NAMES } from './constants/types'
import { UserDetails } from './constants/user-details'

async function run() {
  const getUserInput = new GetUserInput()
  const userDetails = new UserDetails()

  const chatSession = modelClient.startChat({
    generationConfig,
    history: INIT_HISTORY,
    tools,
    toolConfig,
  })

  console.log(
    "\nCar AI Assistant: Hello! I'm your Car AI Assistant. How can I help you with your car needs today?\n"
  )

  const handleTools = async (part: Part) => {
    const functionName = part?.functionCall?.name
    const args = part?.functionCall?.args as {
      key: keyof CarPreference
      value: string
    }
    if (functionName === TOOLS_NAMES.SAVE_CAR_PREFERENCE) {
      userDetails.saveCarPreference(args?.key, args?.value)
    } else if (functionName === TOOLS_NAMES.GET_USER_CAR_PROFILE) {
      userDetails.getUserCarProfile()
    }
  }

  while (true) {
    const userInput = await getUserInput.getUserInput()

    if (
      userInput.toLowerCase() === 'exit' ||
      userInput.toLowerCase() === 'quit'
    ) {
      console.log('\nCar AI Assistant: Thank you for chatting! Goodbye!')
      getUserInput.close()
      break
    }

    try {
      const result = await chatSession.sendMessage(userInput)
      const response = result?.response
      if (response?.candidates) {
        const parts = response?.candidates[0]?.content?.parts
        for (const part of parts) {
          if (part.functionCall) {
            await handleTools(part)
          }

          console.log(`\nCar AI Assistant: ${response?.text()}\n`)
        }
      }
    } catch (error) {
      console.error('Error:', error)
      console.log(
        "\nCar AI Assistant: I'm sorry, there was an error processing your request. Let's try again.\n"
      )
    }
  }
}

run()
