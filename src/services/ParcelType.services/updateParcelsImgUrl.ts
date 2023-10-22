import {
  getStorage,
  ref,
  getDownloadURL,
  FirebaseStorage,
} from 'firebase/storage'

import type { IParcel } from '../../types'

async function getImageurlPromise(storage: FirebaseStorage, imagePath: string) {
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

export { updateParcelsImgUrl }
