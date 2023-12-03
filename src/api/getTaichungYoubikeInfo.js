import axios from 'axios'
const TaichungUrl =
  'https://datacenter.taichung.gov.tw/swagger/OpenData/86dfad5c-540c-4479-bb7d-d7439d34eeb1'
  // 'https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/Taichung?%24format=JSON'
// https://datacenter.taichung.gov.tw/swagger/OpenData/86dfad5c-540c-4479-bb7d-d7439d34eeb1

export const getTaichungYoubike = async () => {
  try {
    const res = await axios.get(TaichungUrl)
    return res.data.retVal
  } catch (error) {
    console.log('[Get Taichung data failed]:', error)
  }
}
