import axios from 'axios'
class API {
    postApi(url, data, headers) {
        const endPoint = url
        return axios.post(endPoint, data, headers)
    }

    getApi(url) {
        const endPoint = url
        return axios.get(endPoint)
    }

    deleteApi(url) {
        const endPoint = url
        return axios.delete(endPoint)
    }

    putApi(url, data, headers) {
        const endPoint = url
        return axios.put(endPoint, data, headers)
    }
}

export default new API()