import styled from '@emotion/styled'

export const AppContainer = styled.main(
  {
    // background: 'red',
    height: '100svh',
    width: '100vw',
    display: 'flex',
    '.map-container': {
      height: '100%',
      width: '70%',
      background: 'rgba(100,123,123,0.8)',
    },
    aside: {
      height: '100%',
      width: '30%',
      padding: 16,
      background: '#f5f5f5',
      overflowY: 'auto',
      '&>.MuiBox-root': { marginBottom: 12 },
    },
  },
  { label: 'app-container' },
)
