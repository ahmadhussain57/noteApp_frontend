import axios from "axios";
const baseUrl='http://localhost:3001/api/notes'

const getAll=()=>{
   const requst=   axios.get(baseUrl)
   return requst.then(response=>response.data)
}
const create=(noteObject)=>{
    const requst= axios.post(baseUrl,noteObject)
    return requst.then(response=>response.data)
}
const update=(id,newObject)=>{
const requst= axios.put(`${baseUrl}/${id}`,newObject)
return requst.then(response=>response.data)
}

export default{getAll,create,update}