import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import { NavBar } from 'antd-mobile'

import JobSeekerInfo from '../jobseeker-info/jobseeker-info'
import BossInfo from '../boss-info/boss-info'
import JobSeeker from '../jobseeker/jobseeker'
import Boss from '../boss/boss'
import Message from '../message/message'
import Personal from '../personal/personal'
import PageNotFound from '../../components/page-not-found/page-not-found'
import BottomNavbar from '../../components/bottom-navbar/bottom-navbar'

import { getRedirectTo } from '../../utils'
import { getUser } from '../../redux/actions'

class Main extends Component {

    // 给组件对象添加属性
    navList = [ // 包含所有导航的信息
        {
            path: '/boss',
            component: Boss,
            title: 'Job Seeker list',
            icon: 'jobseeker',
            text: '求職者'
        },
        {
            path: '/jobseeker',
            component: JobSeeker,
            title: 'Boss list',
            icon: 'boss',
            text: '招聘者'
        },
        {
            path: '/message',
            component: Message,
            title: 'Message list',
            icon: 'message',
            text: '消息'
        },
        {
            path: '/personal',
            component: Personal,
            title: 'Person Info',
            icon: 'personal',
            text: '个人'
        },
    ]

    // after all the elements of the page is rendered correctly, this method is called
    componentDidMount() {
        // 登陸過(cookie中有userId), 但此刻沒有登陸(redux中的user沒有_id)
        const userId = Cookies.get('userId') // 读取cookie的userId
        const { _id } = this.props.user // 读取redux的_id
        // 如存在userId但不存在_id
        if (userId && !_id) {
            // 發送異步請求, 獲取user
            console.log('發送ajax請求獲取user')
            this.props.getUser() // 調用redux action函數，redux返回更新的數据會再执行render()
        }    
    }

    render() {

        // 读取cookie的userId, 判斷userId是否存在
        const userId = Cookies.get('userId')

        // 1. 如cookie没有userId   
        if (!userId) {
            return <Redirect to='/login'/> // 跳转到login頁面
        }

        // 2. 如cookie有userId, 
        // 读取redux中的_id, 判斷_id是否存在
        const { user } = this.props // redux初始沒有数据 

        // debugger

        // 1). 如没有_id
        if (!user._id) {
            return null // 不做任何顯示
        }
        // 2). 如有_id
        else {
            // 读取請求發送的路徑
            let path = this.props.location.pathname
            // 判斷path是否是根路徑
            if (path === '/') {
                // 根据user的type和header做相应的跳转
                path = getRedirectTo(user.type, user.header)
                return <Redirect to={path}/>
            }
        }
        
        const { navList } = this
        const path = this.props.location.pathname // 請求的路徑
        const currentNav = navList.find(nav => nav.path === path) // 從navList中核對并取得該請求路徑 (可能沒有)

        return (
            <div>
                {/* Top navbar */}
                { currentNav ? <NavBar>{currentNav.title}</NavBar> : null }
                <Switch>
                    {/* Container component routes */}
                    { navList.map(nav => <Route key={nav.path} path={nav.path} component={nav.component}></Route>) }
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/jobseekerinfo' component={JobSeekerInfo}></Route>
                    <Route component={PageNotFound}></Route>
                </Switch>
                {/* Bottom navbar */}
                { currentNav ? <BottomNavbar navList={navList} /> : null }
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    { getUser }
)(Main)