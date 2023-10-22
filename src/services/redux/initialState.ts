import type { IAppState } from '../../types'

export const initialState: IAppState = {
  mapScriptLoaded: false,
  originFormData: {
    name: '',
    address: {
      text: '',
      lat: null,
      lng: null,
    },
    moreDetails: '',
    phoneNumber: '',
  },
  destinationFormData: {
    name: '',
    address: {
      text: '',
      lat: null,
      lng: null,
    },
    moreDetails: '',
    phoneNumber: '',
  },
  selectedParcel: null,
  pricingData: null,
  selectedTransportOption: null,
}
