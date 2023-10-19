import { useField } from 'formik'
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-places-autocomplete'

import { useAppDispatch } from '../hooks/redux'
import { updateLatLng } from '../services/appSlice'

export const AddressSelect = ({
  addressType,
}: {
  addressType: 'origin' | 'destination'
}) => {
  const { 0: field, 2: helpers } = useField('address')
  const dispatch = useAppDispatch()

  const onPlaceSelect = async (newValue: { label: string; value: unknown }) => {
    helpers.setValue(newValue.label)

    try {
      const results = await geocodeByAddress(newValue.label)
      const { lat, lng } = await getLatLng(results[0])

      //update only lat ond lng
      const data = { lat, lng }
      dispatch(
        updateLatLng({
          type: addressType,
          data,
        }),
      )
    } catch (error) {
      console.error(error)
    } finally {
    }
  }

  return (
    <>
      <GooglePlacesAutocomplete
        minLengthAutocomplete={2}
        selectProps={{
          value: field.value,
          onChange: onPlaceSelect,
        }}
      />
    </>
  )
}
