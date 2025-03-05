export type CarPreference = {
  budget: string
  car_type: string
  new_or_used: string
  preferred_brand: string
  important_features: string
  current_car: string
  primary_use: string
  color_preference: string
  financing_options: string
}

export enum TOOLS_NAMES {
  SAVE_CAR_PREFERENCE = 'save_car_preference',
  GET_USER_CAR_PROFILE = 'get_user_car_profile',
}
