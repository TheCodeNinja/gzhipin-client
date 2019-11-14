/**
 * 包含n個action creator
 * 異步action
 * 同步action
 */

import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER } from "./action-types"
import { reqRegister, reqLogin, reqUpdateUser, reqUser } from '../api'

// 每一个action-type都对应一个同步action

// 授权成功对同步action
const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })

// 错误提示信息的同步action
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg })

// 接收用戶的同步action
const receiveUser = (user) => ({ type: RECEIVE_USER, data: user })

// 重置用戶的同步action
const resetUser = (msg) => ({ type: RESET_USER, data: msg})

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

// 處理/update請求的函数
export const updateUser = (user) => {
    return async dispatch => {
        // 异步更新并获取用户数据
        const response = await reqUpdateUser(user);
        const result = response.data;
        /* 
        bossinfo update result sent back from server:
        
        {
            "code": 0,
            "data": {
                "header": "头像10",
                "post": "front-end developer",
                "company": "google",
                "salary": "20k",
                "info": "javascript",
                "_id": "5dbfd4ce59393d089c096c3f",
                "username": "Mario",
                "type": "recruit"
            }
        }

        jobseekerinfo update result sent back from server:
        
        {
            "code": 0,
            "data": {
                "header": "头像10",
                "post": "front-end developer",
                "info": "know javascript, python",
                "_id": "5dbfd4ac59393d089c096c3e",
                "username": "Yoshi",
                "type": "findJob"
            }
        }
        */
        if (result.code === 0) { // 更新成功
            // 分发同步action到reducers
            dispatch(receiveUser(result.data));
        }
        else { // 更新失败
            // 分发同步action到reducers
            dispatch(resetUser(result.msg));
        }
    }
}

// 获取用户信息数据
export const getUser = () => {
    return async dispatch => {
        // 获取用户数据
        const response = await reqUser(); // 發送ajax請求 (异步请求)
        const result = response.data;
        if (result.code === 0) { // 请求成功
            dispatch(receiveUser(result.data)); // 发送同步action
        } 
        else { // 请求失敗
            dispatch(resetUser(result.msg)); // 发送同步action
        }
    }
}