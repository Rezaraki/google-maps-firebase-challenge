import { ITransportOption } from './ITransportOption'
import { TVehicleTypes } from './TVehicleTypes'
import { Prettify } from './utilsTypes'

export type TPricingData = Prettify<
  Partial<Record<TVehicleTypes, ITransportOption>>
>
