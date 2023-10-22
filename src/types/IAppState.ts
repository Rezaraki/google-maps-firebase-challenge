import { IAddressForm } from './IAddressForm'
import { IParcel } from './IParcel'
import { TPricingData } from './TPricingData'
import { TVehicleTypes } from './TVehicleTypes'

export interface IAppState {
  mapScriptLoaded: boolean
  originFormData: IAddressForm
  destinationFormData: IAddressForm
  selectedParcel: IParcel | null
  pricingData: TPricingData | null
  selectedTransportOption: TVehicleTypes | null
}
