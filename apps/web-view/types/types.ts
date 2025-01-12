export interface Message<T> {
  type: 'giveLocation'
  data: T
}

export interface Location {
  longitude: number
  latitude: number
}
