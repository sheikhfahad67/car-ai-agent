import {
  FunctionCallingMode,
  SchemaType,
  Tool,
  ToolConfig,
} from '@google/generative-ai'
import { TOOLS_NAMES } from '../constants/types'

export const tools: Tool[] = [
  {
    functionDeclarations: [
      {
        name: TOOLS_NAMES.GET_USER_CAR_PROFILE,
        description: "Save user's car preferences",
        parameters: {
          type: SchemaType.OBJECT,
          properties: {
            key: { type: SchemaType.STRING },
            value: { type: SchemaType.STRING },
          },
          required: ['key', 'value'],
        },
      },
      {
        name: TOOLS_NAMES.GET_USER_CAR_PROFILE,
        description: 'Retrieve all collected car-related information',
        parameters: {
          type: SchemaType.OBJECT,
          properties: {
            key: { type: SchemaType.STRING },
            value: { type: SchemaType.STRING },
          },
        },
      },
    ],
  },
]

export const toolConfig: ToolConfig = {
  functionCallingConfig: { mode: FunctionCallingMode.AUTO },
}
