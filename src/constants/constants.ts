import { Content } from '@google/generative-ai'
import { CarPreference } from './types'

export const INIT_HISTORY: Content[] = [
  {
    role: 'user',
    parts: [
      {
        text: 'Hi There! I am looking to buy a new car. Can you help me with some recommendations?',
      },
    ],
  },
]

export const initCarPreference = (): CarPreference => {
  return {
    budget: '',
    car_type: '',
    new_or_used: '',
    preferred_brand: '',
    important_features: '',
    current_car: '',
    primary_use: '',
    color_preference: '',
    financing_options: '',
  }
}
