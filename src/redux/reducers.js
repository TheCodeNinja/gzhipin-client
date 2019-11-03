/**
 * 包含n個reducer函數：根據舊的state和指定的action返回一個新的state
 */

import { combineReducers } from 'redux'

function xxx(state=0, action) {
    return state
}

function yyy(state=0, action) {
    return state
}


// 向外暴露的狀態的結構：{xxx: 0, yyy: 0}
export default combineReducers({
    xxx,
    yyy
})