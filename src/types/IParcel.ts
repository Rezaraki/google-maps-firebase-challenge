export interface IParcel {
  id: string
  parcel_description: string
  parcel_img_url: string
  firebase_fetched_img_url?: string
  parcel_max_weight: number
  parcel_min_weight: number
  parcel_type: string
  vehicle_type: { driving: boolean; bicycling: boolean; walking: boolean }
}
