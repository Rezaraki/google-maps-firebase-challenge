import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { ErrorMessage, useField } from 'formik'
import { useState } from 'react'

const options = ['Option 1', 'Option 2', '']

export const AddressSelect = () => {
  const [field, meta, helpers] = useField('address')
  //   const [value, setValue] = useState<string | null>(options[0])
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <Autocomplete
        disablePortal
        id="address"
        value={field.value}
        onChange={(event: any, newValue: string | null) => {
          helpers.setTouched(true)
          helpers.setValue(newValue)
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          helpers.setTouched(true)
          setInputValue(newInputValue)
        }}
        options={options}
        renderInput={(params) => <TextField {...params} label="Address" />}
      />

      {meta.touched && meta.error}
    </>
  )
}
