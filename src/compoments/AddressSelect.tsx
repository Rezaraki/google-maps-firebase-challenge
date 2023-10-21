import { useField, useFormikContext } from 'formik'
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-places-autocomplete'

import { useAppDispatch } from '../services/hooks/redux'
import { updateLatLng } from '../services/appSlice'

export const AddressSelect = ({
  addressType,
}: {
  addressType: 'origin' | 'destination'
}) => {
  const { 0: field, 2: helpers } = useField('address')
  const { values, submitForm } = useFormikContext()

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
    }
  }

  return (
    <>
      <GooglePlacesAutocomplete
        minLengthAutocomplete={2}
        apiOptions={{ region: 'au', language: 'en' }}
        selectProps={{
          onChange: onPlaceSelect,
        }}
      />
    </>
  )
}
