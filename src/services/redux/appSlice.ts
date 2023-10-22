import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  IAddressForm,
  IParcel,
  TAddressType,
  TPricingData,
  TVehicleTypes,
} from '../../types'
import { initialState } from './initialState'

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateMapScriptStatus: (state) => {
      state.mapScriptLoaded = true
    },
    updateAddressFormData: (
      state,
      action: PayloadAction<{ type: TAddressType; data: IAddressForm }>,
    ) => {
      if (action.payload.type === 'origin')
        state.originFormData = action.payload.data
      if (action.payload.type === 'destination')
        state.destinationFormData = action.payload.data
    },
    updateLatLng: (
      state,
      action: PayloadAction<{
        type: TAddressType
        data: { lat: number; lng: number }
      }>,
    ) => {
      if (action.payload.type === 'origin') {
        state.originFormData.address.lat = action.payload.data.lat
        state.originFormData.address.lng = action.payload.data.lng
      }
      if (action.payload.type === 'destination') {
        state.destinationFormData.address.lat = action.payload.data.lat
        state.destinationFormData.address.lng = action.payload.data.lng
      }
    },
    selectParcel: (state, action: PayloadAction<IParcel>) => {
      state.selectedParcel = action.payload
    },
    updatePricingData: (state, action: PayloadAction<TPricingData>) => {
      state.pricingData = action.payload
    },
    selectTransportOption: (state, action: PayloadAction<TVehicleTypes>) => {
      state.selectedTransportOption = action.payload
    },
  },
})

export const {
  updateMapScriptStatus,
  updateAddressFormData,
  updateLatLng,
  selectParcel,
  updatePricingData,
  selectTransportOption,
} = appSlice.actions

export default appSlice.reducer
