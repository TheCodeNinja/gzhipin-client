import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import JobSeekerInfo from '../jobseeker-info/jobseeker-info'
import BossInfo from '../boss-info/boss-info'

export default class Main extends Component {
    render() {
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