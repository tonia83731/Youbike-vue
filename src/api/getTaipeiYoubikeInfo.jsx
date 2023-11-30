import axios from 'axios'
const TaipeiUrl =
  'https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/Taipei?%24format=JSON'
// https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json

export const getTaipeiYoubike = async () => {
  try {
    const res = await axios.get(TaipeiUrl)
    return res.data
  } catch (error) {
    console.log('[Get Taipei data failed]:', error)
  }
}
