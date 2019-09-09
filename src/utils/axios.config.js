import axios from 'axios'
import router from '../permission'
import { Message } from 'element-ui'
import jsonBigInt from 'json-bigint'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

axios.defaults.transformResponse = [function (data) {
    return jsonBigInt.parse(data)
}]
axios.interceptors.request.use(function (config) {
    let token = window.localStorage.getItem('user-token')
    config.headers['Authorization'] = `Bearer ${token}`
    return config
}, function () { })

axios.interceptors.response.use(function (response) {
    return response.data ? response.data : {}
}, function (error) {
    let status = error.response.status
    let message = ''
    switch (status) {
        case 400:
            message = '请求参数错误'
            break;
        case 403:
            message = '非实名'
            break;
        case 507:
            message = '服务器数据库异常'
            break;
        case 404:
            message = '手机号不正确'
            break;
        case 401:
            message = 'token过期或未传'
            window.localStorage.clear()
            router.push('/login')
            break;
        default:
            message = '未知错误'
            break;
    }
    Message({ type: 'warning', message })
    return new Promise(function () { })
})
export default axios
