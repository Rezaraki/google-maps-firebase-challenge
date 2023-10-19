import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IAddressForm, TAddressType } from '../types'

export interface CounterState {
  mapScriptLoaded: boolean
  originFormData: IAddressForm
  destinationFormData: IAddressForm
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
    // increment: (state) => {
    //   state.value += 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { updateMapScriptStatus, updateAddressFormData, updateLatLng } =
  appSlice.actions

export default appSlice.reducer
