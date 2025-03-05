import { initCarPreference } from './constants'
import { CarPreference } from './types'

export class UserDetails {
  private carsPref: CarPreference

  constructor() {
    this.carsPref = initCarPreference()
  }

  saveCarPreference(key: keyof CarPreference, value: string): void {
    console.log('====================================')
    console.log(`Saving car preference: ${key} - ${value}`)
    console.log('====================================')
    this.carsPref[key] = value
  }

  getUserCarProfile(): CarPreference {
    console.log('====================================')
    console.log('Retrieving user car profile')
    console.log(this.carsPref)
    console.log('====================================')
    return this.carsPref
  }
}
