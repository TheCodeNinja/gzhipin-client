import React, { Component } from 'react';
import {
    NavBar, WingBlank, List, InputItem, WhiteSpace, Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'

export default class Register extends Component {

    state = {
        username: '',
        password: ''
    }

    submit = () => {
        console.log(this.state)
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
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;宜&nbsp;聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
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