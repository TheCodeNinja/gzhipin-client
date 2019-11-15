/*
包含了n個接口請求函數的模塊
函數返回值是promise
*/

import ajax from './ajax'

// 定義註册接口
export const reqRegister = (user) => ajax('/register', user, 'POST')

// 定義登陸接口
export const reqLogin = ({username, password}) => ajax('/login', {username, password}, 'POST')

// 定義更新用戶接口
export const reqUpdateUser = (user) => ajax('/update', user, 'POST')

// 定義獲取用戶信息接口
export const reqUser = () => ajax('/user')

// 定義獲取指定類型的用戶信息接口
export const reqUserList = (type) => ajax('/userlist', {type})