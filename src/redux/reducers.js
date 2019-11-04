/**
 * 包含n個reducer函數：根據舊的state和指定的action返回一個新的state
 */

import { combineReducers } from 'redux'
import { AUTH_SUCCESS, ERROR_MSG } from './action-types'

// state的初始对象
const initUser = {
    username: '', 
    type: '', 
    msg: ''
}

function user(state=initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS: // data是user
            return {
                ...state, // 先把原本的state对象拆解出来
                ...action.data // 因为data是user, 拆解他并覆盖掉旧的state对象的值
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