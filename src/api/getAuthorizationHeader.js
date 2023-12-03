import jsSHA from "jssha"

export const getAuthorizationHeader = async () => {
  let client_id = import.meta.env.VITE_APP_TDX_CLIENT_ID
  let client_secret = import.meta.env.VITE_APP_TDX_CLIENT_SECRET

  let GMTString = new Date().toGMTString()
  let ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(client_secret, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  let HMAC = ShaObj.getHMAC('B64')
  let Authorization =
    'hmac username="' +
    client_id +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'
  return { Authorization: Authorization, 'X-Date': GMTString } 
}

