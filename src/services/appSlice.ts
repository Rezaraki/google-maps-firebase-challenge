import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IAddressForm, IParcel, TAddressType } from '../types'

export interface CounterState {
  mapScriptLoaded: boolean
  originFormData: IAddressForm
  destinationFormData: IAddressForm
  selectedParcel: IParcel | null
}

const initialState: CounterState = {
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
}

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
  },
})

// Action creators are generated for each case reducer function
export const {
  updateMapScriptStatus,
  updateAddressFormData,
  updateLatLng,
  selectParcel,
} = appSlice.actions

export default appSlice.reducer
