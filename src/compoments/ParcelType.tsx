import { Button } from '@mui/material'

import { useAppDispatch, useAppSelector } from '../services/redux/hooks'

import { useEffect, useState } from 'react'
import { ParcelTypeContainer } from '../css/ParcelTypeContainer'

import { IParcel, IPricingBodyData, TPricingData } from '../types'
import { selectParcel, updatePricingData } from '../services/redux/appSlice'
import {
  fetchParcelData,
  getTransportOptions,
  updateParcelsImgUrl,
} from '../services/ParcelType.services'

export const ParcelType = () => {
  const [parcels, setParcels] = useState<IParcel[] | null>(null)
  const { selectedParcel, originFormData, destinationFormData } =
    useAppSelector((state) => state.app)

  const dispatch = useAppDispatch()

  async function fetchData() {
    const fetchedParcels = await fetchParcelData()
    setParcels(fetchedParcels)
    updateParcelsImgUrl(fetchedParcels, setParcels)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleParcelClick(id: string) {
    const newSelectedParcel = parcels?.find((parcel) => parcel.id === id)
    if (newSelectedParcel) dispatch(selectParcel(newSelectedParcel))
  }

  async function handleConfirmClick() {
    const {
      id,
      parcel_img_url,
      firebase_fetched_img_url,

      ...neededParcelData
    } = selectedParcel ?? {}

    const pricingBodyData: IPricingBodyData = {
      origin: {
        lat: originFormData.address.lat!,
        lng: originFormData.address.lng!,
      },
      destination: {
        lat: destinationFormData.address.lat!,
        lng: destinationFormData.address.lng!,
      },
      ...(neededParcelData as IParcel),
    }
    const pricingData = await getTransportOptions(pricingBodyData)
    dispatch(updatePricingData(pricingData as TPricingData))
  }
  return (
    <ParcelTypeContainer>
      <h2>Parcel Type</h2>
      <div className="parcels-container">
        {parcels?.map((parcel) => (
          <article
            className={`parcel ${
              selectedParcel?.id === parcel.id ? 'selected' : ''
            }`}
            key={parcel.id}
          >
            <button onClick={() => handleParcelClick(parcel.id)}>
              <div className="left-container">
                <div className="img-container">
                  <img
                    src={parcel.firebase_fetched_img_url}
                    alt={parcel.parcel_type}
                  />
                </div>
                <h3>{parcel.parcel_type}</h3>
              </div>

              <p>
                {parcel.parcel_min_weight}-{parcel.parcel_max_weight} kg max
                <br />
                {parcel.parcel_description}
              </p>
            </button>
          </article>
        ))}
      </div>
      <div className="btn-container">
        <Button
          variant="outlined"
          type="submit"
          disabled={!selectedParcel}
          onClick={handleConfirmClick}
        >
          Confirm
        </Button>
      </div>
    </ParcelTypeContainer>
  )
}
