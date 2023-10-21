import { Button } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { useAppDispatch, useAppSelector } from '../services/hooks/redux'
import {
  getStorage,
  ref,
  getDownloadURL,
  FirebaseStorage,
} from 'firebase/storage'
import { useEffect, useState } from 'react'
import { ParcelTypeContainer } from '../css/ParcelTypeContainer'
import { db } from '../services/firebase'
import { IParcel, TPricingData } from '../types'
import { selectParcel, updatePricingData } from '../services/appSlice'

export const ParcelType = () => {
  const [parcels, setParcels] = useState<IParcel[] | null>(null)
  const { selectedParcel, originFormData, destinationFormData } =
    useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()
  async function getImageurlPromise(
    storage: FirebaseStorage,
    imagePath: string,
  ) {
    const imageRef = ref(storage, imagePath)
    const urlPromise = getDownloadURL(imageRef)
    return urlPromise
  }

  async function getParcelsImgUrls(parcels: IParcel[]) {
    const storage = getStorage()
    const imgUrlPromises = parcels.map(async (parcel) => {
      return getImageurlPromise(storage, parcel.parcel_img_url)
    })
    const allImgsPromise = Promise.allSettled(imgUrlPromises)
    return allImgsPromise
  }

  async function updateParcelsImgUrl(
    parcels: IParcel[],
    updateParcelFunc: (value: IParcel[] | null) => void,
  ) {
    try {
      const pracelImgsArr = await getParcelsImgUrls(parcels)

      const imgUpdatedParcels = parcels.map((parcel, i) => {
        if (pracelImgsArr[i].status === 'fulfilled')
          parcel.firebase_fetched_img_url = (
            pracelImgsArr[i] as PromiseFulfilledResult<string>
          ).value
        return parcel
      })
      updateParcelFunc(imgUpdatedParcels)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const fetchParcelData = async () => {
      const data = await getDocs(collection(db, 'bearerParcels'))

      // convert to a plain JavaScript object
      const parcels = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as IParcel[]
      updateParcelsImgUrl(parcels, setParcels)
      setParcels(parcels)
    }

    fetchParcelData()
  }, [])

  function handleParcelClick(id: string) {
    const newSelectedParcel = parcels?.find((parcel) => parcel.id === id)
    if (newSelectedParcel) dispatch(selectParcel(newSelectedParcel))
  }

  async function handleConfirmClick() {
    const functions = getFunctions()
    const pricingFunction = httpsCallable(functions, 'pricing')

    const {
      id,
      parcel_img_url,
      firebase_fetched_img_url,
      ...neededParcelData
    } = selectedParcel ?? {}

    const pricingBodyData = {
      origin: {
        lat: originFormData.address.lat,
        lng: originFormData.address.lng,
      },
      destination: {
        lat: destinationFormData.address.lat,
        lng: destinationFormData.address.lng,
      },
      ...neededParcelData,
    }
    try {
      const result = await pricingFunction(pricingBodyData)

      const data = result.data
      dispatch(updatePricingData(data as TPricingData))
    } catch (error) {
      console.error(`Error calling pricing function: ${error}`)
    }
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
