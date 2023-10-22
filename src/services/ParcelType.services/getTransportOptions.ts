import { IPricingBodyData, TPricingData } from '../../types'
import { getFunctions, httpsCallable } from 'firebase/functions'

async function getTransportOptions(pricingBodyData: IPricingBodyData) {
  const functions = getFunctions()
  const pricingFunction = httpsCallable(functions, 'pricing')

  try {
    const result = await pricingFunction(pricingBodyData)
    const data = result.data

    return data as TPricingData
  } catch (error) {
    console.error(`Error calling pricing function: ${error}`)
  }
}
export { getTransportOptions }
