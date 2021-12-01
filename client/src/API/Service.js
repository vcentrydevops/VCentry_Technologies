import axios from 'axios'

let baseUrl
if (process.env.NODE_ENV === "production") {
    if(process.env.PORT){
        baseUrl = `${window.location.origin}:${process.env.PORT}/`
    }else{
        baseUrl = `${window.location.origin}:5000/`
    }   
}else{
    baseUrl = "http://localhost:5000/"
}

class API {

    postApi(url, data, headers) {
        const endPoint = baseUrl + url
        return axios.post(endPoint, data, headers)
    }

    getApi(url) {
        const endPoint = baseUrl + url
        console.log(endPoint);
        return axios.get(endPoint)
    }

    deleteApi(url) {
        const endPoint = baseUrl + url
        return axios.delete(endPoint)
    }

    putApi(url, data, headers) {
        const endPoint = baseUrl + url
        return axios.put(endPoint, data, headers)
    }
}

export default new API()