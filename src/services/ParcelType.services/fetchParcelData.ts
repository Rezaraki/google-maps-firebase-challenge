import { collection, getDocs } from 'firebase/firestore'

import { IParcel } from '../../types'
import { db } from '../firebase'

export async function fetchParcelData() {
  const data = await getDocs(collection(db, 'bearerParcels'))
  // convert to a plain JavaScript object
  const parcels = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as IParcel[]
  return parcels
}
