import axios from "axios";
const KaohsiungUrl =
  'https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/Kaohsiung?%24format=JSON'
// https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092

export const getKaohsiungYoubike = async () => {
  try {
    const res = await axios.get(KaohsiungUrl)
    return res.data
  } catch (error) {
    console.log('[Get Kaohsiung data failed]:', error)
  }
}