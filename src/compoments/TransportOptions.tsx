/* eslint-disable sort-keys-custom-order/type-keys */
/* eslint-disable sort-keys-custom-order/object-keys */
import { Button } from '@mui/material'
import { TransportOptionsContainer } from '../css/TransportOptionsContainer'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import drivingimg from '../assets/imgs/motor.png'
import cyclingimg from '../assets/imgs/bike.png'
import walkingimg from '../assets/imgs/walk.png'
import { TVehicleTypes } from '../types'
import { selectTransportOption } from '../services/appSlice'

export const TransportOptions = () => {
  const { pricingData, selectedTransportOption } = useAppSelector(
    (state) => state.app,
  )
  const dispatch = useAppDispatch()
  const COMPONENT_DATA = [
    { name: 'driving', img: drivingimg },
    { name: 'cycling', img: cyclingimg },
    { name: 'walking', img: walkingimg },
  ] as const
  function handleOptionSelect(vehicleName: TVehicleTypes) {
    dispatch(selectTransportOption(vehicleName))
  }
  return (
    <TransportOptionsContainer>
      <h2>Transport Options</h2>
      <div className="options-container">
        {COMPONENT_DATA.map((transportOption, i) => {
          const name = transportOption.name
          const isAvailable = pricingData?.hasOwnProperty(name)
          const isSelected = selectedTransportOption === name
          return (
            <button
              key={`${i}-${name}`}
              className={`${isAvailable ? 'available' : ''} ${
                isSelected ? 'selected' : ''
              }`}
              onClick={() => handleOptionSelect(name)}
            >
              <img src={transportOption.img} alt={name} />
              <br />
              {isAvailable ? (
                <>
                  <span>{pricingData![name]?.price}$</span>
                  <br />
                  <span>{pricingData![name]?.time}</span>
                </>
              ) : (
                <span>not available</span>
              )}
            </button>
          )
        })}
      </div>
      <div className="btn-container">
        <Button variant="outlined" type="submit" disabled={!true}>
          Confirm
        </Button>
      </div>
    </TransportOptionsContainer>
  )
}
