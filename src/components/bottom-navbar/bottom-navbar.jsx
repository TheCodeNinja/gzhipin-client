/* 底部导航组件 */

import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const Item = TabBar.Item

class BottomNavbar extends Component {

    static propTypes = {
        navList: PropTypes.array.isRequired,
        unReadCount: PropTypes.number.isRequired
    }

    render() {
        // Get the state from redux
        let { navList, unReadCount } = this.props
        
        // 過濾掉hidden為true的nav
        // The filter() method creates an array filled with all array elements that pass a test
        navList = navList.filter(nav => !nav.hidden)
        const path = this.props.location.pathname // 請求的路徑

        return (
            <TabBar>
            {
                navList.map((nav) => (
                    <Item 
                        key={nav.path}
                        badge={nav.path === '/message' ? unReadCount : 0}
                        title={nav.text}
                        icon={{uri: require(`./images/${nav.icon}.png`)}}
                        selectedIcon={{uri: require(`./images/${nav.icon}-selected.png`)}}
                        selected={path === nav.path}
                        onPress={()=>this.props.history.replace(nav.path)}
                    />
                ))
            }
            </TabBar>
        )
    }
}

// 希望在非路由组件使用路由庫的api
// 向外暴露withRouter包裝產生的組件
// 內部會向組件中傳入一些路由組件特有的属性：history/location/match
export default withRouter(BottomNavbar);