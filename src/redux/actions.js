/**
 * 包含n個action creator
 * 異步action
 * 同步action
 */

import { AUTH_SUCCESS, ERROR_MSG } from "./action-types"
import { reqRegister, reqLogin } from '../api'

// 每一个action-type都对应一个同步action

// 授权成功对同步action
const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })

// 错误提示信息的同步action
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg })

// 注册异步action
// 异步action返回的是一个函数, dispatch是一个固定参数
export const register = (user) => {
    const { username, password, password2, type } = user

    // 表单检查
    if (!username) {
        return errorMsg('用户名必须指定！')
    }
    else if (password !== password2) {
        return errorMsg('2次密码要一致')
    }

    // 返回一个发ajax请求的异步action函数
    return async dispatch => {
        // reqRegister ajax请求接口返回的是一个promise对象
        // 只能透过.then()方法獲取响应数据, 例如:
        /*
        const promise = reqRegister(user)
        promise.then(response => {
            const result = response.data // {code: 0/1, data: user, msg: 'xxx'}
        })
        */
 
        // 使用await可直接獲取响应数据，而不是promise对象
        // (該語句所在的函數需要同时使用async)
        const response = await reqRegister({ username, password, type })
        const result = response.data

        if (result.code === 0) {
            dispatch(authSuccess(result.data))
        }
        else {
            dispatch(errorMsg(result.msg))
        }
    }
}

// 登陆异步action
export const login = (user) => {
    const { username, password } = user

    // 表单检查
    if (!username) {
        return errorMsg('用户名必须指定！')
    }
    else if (!password) {
        return errorMsg('密码必须指定')
    }

    return async dispatch => {
        const response = await reqLogin(user)
        const result = response.data
        
        if (result.code === 0) {
            dispatch(authSuccess(result.data))
        }
        else {
            dispatch(errorMsg(result.msg))
        }
    }
}
