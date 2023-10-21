import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const TransportOptionsContainer = styled(Box)(
  {
    padding: 20,
    background: '#fff',
    h2: { margin: '8px 0' },

    '.options-container': {
      gap: 8,
      display: 'flex',
      button: {
        display: 'block',
        border: 'none',
        flex: 1,
        background: '#dedede',
        aspectRatio: '1/1',
        '&.available': {
          background: '#f5f5f5',
          cursor: 'pointer',
          '&.selected': { background: '#009eff' },
        },
      },
      img: {
        width: 45,
        height: 45,
      },
    },
    '.btn-container': {
      marginTop: 16,
      display: 'flex',
      justifyContent: 'center',
      button: { width: '50%' },
    },
  },
  { label: 'transport-options-container' },
)
