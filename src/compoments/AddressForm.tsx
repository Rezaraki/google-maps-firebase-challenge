import styled from '@emotion/styled'
import { Box, Button, TextField } from '@mui/material'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { AddressSelect } from './AddressSelect'
import { useAppSelector } from '../hooks/redux'
import { IAddressForm } from '../types'

export const AddressFormContainer = styled(Box)(
  {
    padding: 20,
    background: '#fff',
    h2: { margin: '8px 0' },
    '.half-fields-container': {
      display: 'flex',
      gap: 6,
      '&>div': {
        width: '100%',
        fontSize: '0.75rem',
        flex: '1 1 0',
      },
    },
    '.btns-container': {
      marginTop: 46,
      display: 'flex',
      gap: 6,
      button: {
        width: '100%',
        fontSize: '0.75rem',
        whiteSpace: 'nowrap',
        flex: '1 1 0',
        minHeight: 44,
      },
    },
    '.phone-number': { width: '50%' },
  },
  { label: 'address-form-container' },
)

export const AddressForm = ({
  addressType,
}: {
  addressType: 'origin' | 'destination'
}) => {
  const initialValue: IAddressForm = {
    name: '',
    address: { text: '', lat: null, lng: null },
    moreDetails: '',
    phoneNumber: '',
  }
  const validationSchema = yup.object({
    name: yup
      .string()
      .required('Name is required')
      .min(2, 'at least 2 characters'),
    address: yup.string().required('Address is required'),
    moreDetails: yup.string(),
    phoneNumber: yup
      .string()
      .matches(/^0[0-9]{9}$/, '10 Digits (Starting with 0)')
      .required('Phone number is required'),
  })
  const { mapScriptLoaded } = useAppSelector((state) => state.app)
  return (
    <AddressFormContainer>
      <h2>{addressType}</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('values', values)
        }}
      >
        {(formikValues) => (
          <Form>
            {mapScriptLoaded ? (
              <AddressSelect addressType={addressType} />
            ) : (
              <TextField
                label="Address"
                disabled
                type="text"
                name="address"
                fullWidth
                variant="outlined"
                margin="dense"
              />
            )}
            <Field
              as={TextField}
              label="More Details"
              type="text"
              name="moreDetails"
              fullWidth
              variant="outlined"
              margin="dense"
              helperText={<ErrorMessage name="moreDetails" />}
              error={
                formikValues.errors.moreDetails &&
                formikValues.touched.moreDetails
              }
            />
            <div className="half-fields-container">
              <Field
                as={TextField}
                className="phone-number"
                label="Phone Number"
                type="text"
                name="phoneNumber"
                variant="outlined"
                margin="dense"
                helperText={<ErrorMessage name="phoneNumber" />}
                error={
                  formikValues.errors.phoneNumber &&
                  formikValues.touched.phoneNumber
                }
              />
              <Field
                as={TextField}
                label="name"
                type="text"
                name="name"
                variant="outlined"
                margin="dense"
                helperText={<ErrorMessage name="name" />}
                error={formikValues.errors.name && formikValues.touched.name}
              />
            </div>
            <div className="btns-container">
              <Button variant="outlined">Favourites</Button>
              <Button
                variant="outlined"
                type="submit"
                disabled={!formikValues.dirty || !formikValues.isValid}
              >
                Confirm
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </AddressFormContainer>
  )
}
