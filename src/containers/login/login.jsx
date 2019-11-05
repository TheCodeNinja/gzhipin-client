import React, { Component } from 'react';
import {
    NavBar, WingBlank, List, InputItem, WhiteSpace, Button
} from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../redux/actions'
import { Redirect } from 'react-router-dom'

import Logo from '../../components/logo/logo'

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    submit = () => {
        this.props.login(this.state)
    }

    // 處理輸入數據的改變，更新對應的狀態
    handleChange = (name, val) => {
        this.setState({
            [name]: val // [name]: 取name變量的值
        })
    }

    toRegister = () => {
        this.props.history.replace('/register')
    }

    render () {

        const { msg, redirectTo } = this.props.user

        if (redirectTo) {
            return <Redirect to={redirectTo}/>
        }

        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;宜&nbsp;聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        {msg ? <div className='error-msg'>{ msg }</div> : null}
                        <WhiteSpace />
                        <InputItem placeholder="請輸入用戶名" onChange={val => {this.handleChange('username', val)}}>用戶名：</InputItem>
                        <WhiteSpace />
                        <InputItem placeholder="請輸入密碼" type="password" onChange={val => {this.handleChange('password', val)}}>密&nbsp;&nbsp;&nbsp;&nbsp;碼：</InputItem>               
                        <WhiteSpace />
                        <Button type="primary" onClick={this.submit}>提&nbsp;交</Button>
                        <Button onClick={this.toRegister}>註&nbsp;册</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

// The connect() function connects a React component to a Redux store
export default connect(
    state => ({ user: state.user }), 
    { login } // 向UI组件Login传一个login函數
)(Login)