import React, { Component } from 'react'
import { NavBar, List, InputItem } from 'antd-mobile'
import { connect } from 'react-redux'
import { sendMsg } from '../../redux/actions'

const Item = List.Item

class Chat extends Component {
    state = {
        content: ''
    }

    handleSend = () => {
        // Collect data
        const from = this.props.user._id
        const to = this.props.match.params.userId
        const content = this.state.content

        if (!content) { // content exists?
            return null
        }

        // Make async request
        this.props.sendMsg({from, to, content})
        // Clear state
        this.setState({content: ''})
    }

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
                    <InputItem 
                        placeholder='Input message here' 
                        value={this.state.content} // Update the value based on current state
                        onChange={val => this.setState({content: val})} // Update the state when change
                        extra={
                            <span onClick={this.handleSend}>Send</span>
                        }>
                    </InputItem>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {sendMsg}
)(Chat)
