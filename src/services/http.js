import axios from 'axios'

class HttpRequester {
    constructor (url = 'http://lcoalhost:8001.local') {
        // this.axios = axios
        this.axiosInstance = axios.create({
            baseURL: url,
            timeout: 120000,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        })

        this.axiosInstance.interceptors.request.use(function (config) {
            // Do something before request is sent
            return config
        }, function (error) {
            // Do something with request error
            return Promise.reject(error)
        })

        // Add a response interceptor
        this.axiosInstance.interceptors.response.use(function (response) {
            // Do something with response data
            return response
        }, function (error) {
            // Do something with response error
            return Promise.reject(error)
        })
    }

    setHeader (header) {
        // this.axiosInstance.defaults.headers.common[header.key] = header.value
        this.axiosInstance.defaults.headers.common = header
        this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    }

    get (methodName, data, header) {
        return this.axiosInstance.get(methodName, {
            params: data
        }, {
            header
        })
    }

    create (methodName, data) {
        return this.axiosInstance.post(methodName, data)
    }

    update (methodName, data) {
        return this.axiosInstance.put(methodName, data)
    }

    delete (methodName, param, data) {
        return this.axiosInstance.delete(methodName, {
            params: param,
            data: data
        })
    }

    request (type, url, data, header) {
        let promise = null
        switch (type) {
            case 'GET': promise = axios.get(url, { params: data }, header); break
            case 'POST': promise = axios.post(url, data); break
            case 'PUT': promise = axios.put(url, data); break
            case 'DELETE': promise = axios.delete(url, data); break
            default : promise = axios.get(url, { params: data }); break
        }
        return promise
    }
}

export default HttpRequester