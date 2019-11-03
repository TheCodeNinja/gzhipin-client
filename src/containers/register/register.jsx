import React, { Component } from 'react';
import {
    NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'

const ListItem = List.Item

export default class Register extends Component {
    render () {
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;宜&nbsp;聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem>用戶名：</InputItem>
                        <WhiteSpace />
                        <InputItem type="password">密&nbsp;&nbsp;&nbsp;&nbsp;碼：</InputItem>
                        <WhiteSpace />
                        <InputItem type="password">確認密碼：</InputItem>
                        <WhiteSpace />
                        <ListItem>
                            <span>用戶類型：</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio>求職</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio>招聘</Radio>
                        </ListItem>
                        <WhiteSpace />
                        <Button type="primary">註&nbsp;册</Button>
                        <Button>登入</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}