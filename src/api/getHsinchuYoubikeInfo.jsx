import axios from 'axios'
const HsinchuUrl =
  'https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/Hsinchu?&%24format=JSON'

export const getHsinchuYoubike = async () => {
  try {
    const res = await axios.get(HsinchuUrl)
    return res.data
  } catch (error) {
    console.log('[Get Hsinchu data failed]:', error)
  }
}
