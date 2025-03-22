import axios from "axios"
import config from "../config/config"

const getCourseVideo=async()=>{
  const response= await axios.get(`${config.BaseApiUrl}/api/classes`)
  console.log(response)
  return response
}
export {getCourseVideo}