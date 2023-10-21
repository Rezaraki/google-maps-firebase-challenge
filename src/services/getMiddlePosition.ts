export function getMiddlePosition(
  pos1: { lat: number; lng: number },
  pos2: { lat: number; lng: number },
) {
  const lat1 = pos1.lat
  const lng1 = pos1.lng
  const lat2 = pos2.lat
  const lng2 = pos2.lng

  const dLng = lng2 - lng1
  const Bx = Math.cos(lat2) * Math.cos(dLng)
  const By = Math.cos(lat2) * Math.sin(dLng)
  const lat3 = Math.atan2(
    Math.sin(lat1) + Math.sin(lat2),
    Math.sqrt((Math.cos(lat1) + Bx) * (Math.cos(lat1) + Bx) + By * By),
  )
  const lng3 = lng1 + Math.atan2(By, Math.cos(lat1) + Bx)

  return { lat: lat3, lng: lng3 }
}
