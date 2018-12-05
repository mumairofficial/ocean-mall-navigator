import axios from 'axios'
import Headers from './headers'

const baseURL = 'http://gfinder.genislab.com'

export default class HttpWrapper {
  static simpleHttp () {
    return axios.create({
      baseURL,
      headers: Object.assign({}, Headers.simple())
    })
  }

  static tokenOnlyHttp () {
    return axios.create({
      baseURL,
      headers: Object.assign({}, Headers.withToken())
    })
  }
}