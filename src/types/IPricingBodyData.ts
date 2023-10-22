export interface IPricingBodyData {
  origin: {
    lat: number
    lng: number
  }
  destination: {
    lat: number
    lng: number
  }
  vehicle_type: {
    walking: boolean
    driving: boolean
    bicycling: boolean
  }
  parcel_type: string
  parcel_description: string
  parcel_min_weight: number
  parcel_max_weight: number
}
