import axios from 'axios'
const NewTaipeiUrl =
  'https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/NewTaipei?%24format=JSON'
// https://data.ntpc.gov.tw/api/datasets/010E5B15-3823-4B20-B401-B1CF000550C5/json?page=0&size=1000

export const getNewTaipeiYoubike = async () => {
  try {
    const res = await axios.get(NewTaipeiUrl)
    return res.data
  } catch (error) {
    console.log('[Get NewTaipei data failed]:', error)
  }
}
