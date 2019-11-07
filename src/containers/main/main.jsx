import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import JobSeekerInfo from '../jobseeker-info/jobseeker-info'
import BossInfo from '../boss-info/boss-info'

class Main extends Component {

    render() {

        // 檢查用戶是否登陆，如果沒有, 自动重定向到登陆界面
        const { user } = this.props
        if (!user._id) {
            return <Redirect to='/login'/>
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