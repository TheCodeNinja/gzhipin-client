import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

import JobSeekerInfo from '../jobseeker-info/jobseeker-info'
import BossInfo from '../boss-info/boss-info'
import { getRedirectTo } from '../../utils'

class Main extends Component {

    componentDidMount() {
        // 登陸過(cookie中有userId), 但此刻沒有登陸(redux中的user沒有_id)
        const userId = Cookies.get('userId') // 读取cookie的userId
        const { _id } = this.props.user // 读取redux的_id
        // 如存在userId但不存在_id
        if (userId && !_id) {
            // 發送異步請求, 獲取user
            console.log('發送ajax請求獲取user')
        }    
    }

    render() {

        // 读取cookie的userId, 判斷userId是否存在
        const userId = Cookies.get('userId')

        // 如没有userId，(debugger here))     
        if (!userId) {
            // 跳转到login page
            return <Redirect to='/login'/>
        }

        // 如有userId, 
        // 读取redux中的_id, 判斷_id是否存在
        const { user } = this.props // redux初始沒有数据, 这里会读取redux中的数据, component re-render後繼續往下運行

        if (!user._id) { // 如没有_id
            return null // 不做任何顯示
        }
        else { // 如有_id
            // 读取請求發送的路徑
            let path = this.props.location.pathname
            // 判斷path是否是根路徑
            if (path === '/') {
                // 根据user的type和header做相应的跳转
                path = getRedirectTo(user.type, user.header)
                return <Redirect to={path}/>
            }
        }
       
        return (
            <div>
                <Switch>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/jobseekerinfo' component={JobSeekerInfo}></Route>
                </Switch>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
)(Main)