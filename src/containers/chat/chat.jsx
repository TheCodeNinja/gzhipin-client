import React, { Component } from 'react'
import { NavBar, List, InputItem } from 'antd-mobile'
import { connect } from 'react-redux'

const Item = List.Item

class Chat extends Component {
    render() {
        return (
            <div id='chat-page'>
                <NavBar>Navbar</NavBar>
                <List>
                    <Item thumb={require('../../assets/images/头像1.png')}>Hello</Item>
                    <Item thumb={require('../../assets/images/头像1.png')}>Are you busy</Item>
                    <Item className="chat-me" extra='Me'>Hi</Item>
                    <Item className="chat-me" extra='Me'>Not busy</Item>
                </List>
                <div className='am-tab-bar'>
                    <InputItem placeholder='Input message here' extra={
                        <span>Send</span>
                    }></InputItem>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Chat)
