/*
Personal ui container route component
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Result, Button, List, WhiteSpace, Modal } from 'antd-mobile'

const Item = List.Item;
const Brief = Item.Brief;

class Personal extends Component {

    render() {

        const { 
            username, info, company, salary, header, post
        } = this.props.user;
        
        return (
            <div>
                <Result
                    img={<img src={require(`../../assets/images/${header}.png`)} 
                    style={{width: 50}}/>}
                    title={username}
                    message={company}>
                </Result>
                <List renderHeader={() => '相关信息'}>
                    <Item multipleLine>
                        <Brief>职位：{post}</Brief>
                        <Brief>简介：{info}</Brief>
                        {salary ? <Brief>薪资：{salary}</Brief> : null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Button type='warning'>退出登录</Button>
                </List>
            </div>
        )
    }
}
 export default connect(
     state => ({user: state.user}),
     {}
 )(Personal)