/**
 * 包含n個reducer函數：根據舊的state和指定的action返回一個新的state
 */

import { combineReducers } from 'redux'
import { AUTH_SUCCESS, ERROR_MSG } from './action-types'

// state的初始对象
const initUser = {
    username: '', 
    type: '', 
    msg: '',
    redirectTo: '' // 需要自動重定向的路徑
}

function user(state=initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS: // data是user
            return {
                ...action.data, // 因为data是user, 拆解他并覆盖掉旧的state对象的值
                redirectTo: '/'
            }
        case ERROR_MSG: // data是msg
            return {
                ...state, 
                msg: action.data
            }
        default:
            return state
    }
}

// 向外暴露的狀態的結構：{user: {}}
export default combineReducers({
    user
})