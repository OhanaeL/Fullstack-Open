import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const getSpecific = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const del = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const getCountry = (name) => {
  return axios.get(`${getSpecific}/${name}`)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update ,
  delete: del,
  getSpecific: getCountry,
}