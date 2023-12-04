import axios from 'axios'
import jsSHA from 'jssha'
import { baseUrl } from './getYoubikeInfo'
import { getAuthorizationHeader } from './getAuthorizationHeader'

const TaipeiUrl = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
// https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json
// https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/Taipei?%24format=JSON

export const getTaipeiYoubike = async () => {
  try {
    const res = await axios.get(TaipeiUrl)
    return res.data
  } catch (error) {
    console.log('[Get Taipei data failed]:', error)
  }
}

export const getTaipeiStation = async () => {
  try {
    const res = await axios.get(`${baseUrl}/Station/City/Taipei?%24format=JSON`, {
      headers: await getAuthorizationHeader()
    })
    return res.data
  } catch (error) {
    console.log('[Get Taipei station failed]:', error)
  }
}
export const getTaipeiAvailable = async () => {
  try {
    const res = await axios.get(`${baseUrl}/Availability/City/Taipei?%24format=JSON`, {
      headers: getAuthorizationHeader()
    })
    return res.data
  } catch (error) {
    console.log('[Get Taipei available failed]:', error)
  }
}