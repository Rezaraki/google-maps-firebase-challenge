import { Button } from '@mui/material'
import { ParcelFormContainer } from '../css/ParcelFormContainer'

export const ParcelForm = () => {
  return (
    <ParcelFormContainer>
      <div className="parcels-container">
        <div>
          <img src="" alt="" />
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div className="btn-container">
        <Button variant="outlined" type="submit" disabled={false}>
          Confirm
        </Button>
      </div>
    </ParcelFormContainer>
  )
}
