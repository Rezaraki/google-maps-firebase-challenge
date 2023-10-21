import { TVehicleTypes } from './TVehicleTypes'

export interface ITransportOption {
  distance: number // 2.1400313799535238
  duration: number // 10.700156899767618
  length: string // '2.14 km'
  price: string //'8~12'
  time: string //'11~13 min'
  type: Record<TVehicleTypes, boolean> // 'cycling'
}
