import React, { Component } from 'react';
import {
    NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button
} from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/actions'
import { Redirect } from 'react-router-dom'

import Logo from '../../components/logo/logo'

const ListItem = List.Item

class Register extends Component {

    state = {
        username: '',
        password: '',
        password2: '',
        type: 'recruit'
    }

    register = () => {
        this.props.register(this.state)
    }

    // 處理輸入數據的改變，更新對應的狀態
    handleChange = (name, val) => {
        this.setState({
            [name]: val // [name]: 取name變量的值
        })
    }

    toLogin = () => {
        this.props.history.replace('/login')
    }

    render () {

        const { type } = this.state
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
                        <InputItem placeholder="請輸入確認密碼" type="password" onChange={val => {this.handleChange('password2', val)}}>確認密碼：</InputItem>
                        <WhiteSpace />
                        <ListItem>
                            <span>用戶類型：</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type === 'findJob'} onChange={val => {this.handleChange('type', 'findJob')}}>求職</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type === 'recruit'} onChange={val => {this.handleChange('type', 'recruit')}}>招聘</Radio>
                        </ListItem>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.register}>註&nbsp;册</Button>
                        <Button onClick={this.toLogin}>登&nbsp;入</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

// The connect() function connects a React component to a Redux store
export default connect(
    state => ({ user: state.user }), 
    { register } // 向UI组件Register传一个register函數
)(Register)
