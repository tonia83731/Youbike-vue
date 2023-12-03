import axios from "axios";
const KaohsiungUrl =
  'https://api.kcg.gov.tw:443/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092'
  // 'https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/Kaohsiung?%24format=JSON'

export const getKaohsiungYoubike = async () => {
  try {
    const res = await axios.get(KaohsiungUrl)
    return res.data
  } catch (error) {
    console.log('[Get Kaohsiung data failed]:', error)
  }
}