import styled from '@emotion/styled'
import { Box } from '@mui/material'

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
