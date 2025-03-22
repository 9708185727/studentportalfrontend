import axios from "axios"
import config from "../config/config"

const getCourseVideo=async()=>{
  const response= await axios.get(`${config.BaseApiUrl}/api/classes`)
  console.log(response)
  return response
}
const addCourseVideo=async(data)=>{
  const response= await axios.post(`${config.BaseApiUrl}/api/add-class`,data)
  console.log(response)
  return response
}
export {getCourseVideo,addCourseVideo}