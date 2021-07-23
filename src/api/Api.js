//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    // baseURL: 'https://donasi.appdev.my.id/api'
    // baseURL: 'http://donasi.teddinata.com/api'
    // baseURL: 'http://backend-donasi.test/api'
    baseURL: 'http://donasi.griyakoscilacap.com/api'




})

export default Api