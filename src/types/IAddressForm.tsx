export interface IAddressForm {
  name: string
  address: {
    text: string
    lat: number | null
    lng: number | null
  }
  moreDetails: string
  phoneNumber: string
}
