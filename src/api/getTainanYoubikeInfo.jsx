import axios from 'axios'
const TainanUrl =
  'https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/Tainan?%24format=JSON'

export const getTainanYoubike = async () => {
  try {
    const res = await axios.get(TainanUrl)
    return res.data
  } catch (error) {
    console.log('[Get Tainan data failed]:', error)
  }
}
