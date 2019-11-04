/*
能发送ajax请求的函数模块
函数的返回值是一个promise对象
*/
import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
    // 發送GET請求
    if (type === 'GET') {
        // data: {username: Mario, password: pass1234}
        // paramStr: username=Mario&password=pass1234
        let paramStr = '';
        // Object.key(data)得到的是这对象下所有keys的数组
        Object.keys(data).forEach(key => {
            paramStr += key + '=' + data[key] + '&'
        })
        if (paramStr) {
            paramStr = paramStr.substring(0, paramStr.length-1)
        }
        return axios.get(url + '?' + paramStr)
    }
    // 發送POST請求
    else {
        return axios.post(url, data)
    }
}