import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const ParcelFormContainer = styled(Box)(
  {
    padding: 20,
    background: '#fff',
    h2: { margin: '8px 0' },
    '.parcel': {
      padding: '8px 12px',
      borderBottom: '1px solid black',
      '&:last-of-type': { border: 'none' },
      '&>button': {
        width: '100%',
        background: 'none',
        color: 'inherit',
        border: 'none',
        padding: '0',
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      p: { textAlign: 'center', fontSize: '0.8rem' },
      img: {
        position: 'absolute',
        inset: 0,
        margin: 'auto',
        width: '80%',
        height: '80%',
        objectFit: 'contain',
      },

      '&.selected': { background: '#009eff' },
    },
    '.img-container': {
      position: 'relative',
      width: 75,
      height: 75,
      background: '#dedede',
    },
    '.left-container': {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    '.parcels-container': {
      background: '#f5f5f5',
    },
    '.btn-container': {
      marginTop: 16,
      display: 'flex',
      justifyContent: 'center',
      button: { width: '50%' },
    },
  },
  { label: 'parcel-form-container' },
)
