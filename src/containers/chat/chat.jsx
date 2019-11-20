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
        // Get data from redux
        const { user } = this.props
        const { users, chatMsgs } = this.props.chat

        // Get chatId
        const meId = user._id
        if (!users[meId]) { // checking #1
            return null
        }
        const targetId = this.props.match.params.userId
        const chatId = [meId, targetId].sort().join('_')

        // Filter chatMsgs by chatId
        const msgs = chatMsgs.filter(msg => msg.chat_id === chatId)

        // Get target user icon
        const targetHeader = users[targetId].header // users is empty in redux at first, we need 'checking #1'
        const targetIcon = targetHeader ? require(`../../assets/images/${targetHeader}.png`) : null

        return (
            <div id='chat-page'>
                <NavBar>Navbar</NavBar>
                <List>
                {
                    msgs.map(msg => {
                        if (targetId === msg.from) { // target user's message
                            return (<Item key={msg._id} thumb={targetIcon}>{msg.content}</Item>)
                        } 
                        else { // my message
                            return (<Item key={msg._id} className='chat-me' extra='Me'>{msg.content}</Item>)
                        }
                    })
                }
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
    state => ({user: state.user, chat: state.chat}),
    {sendMsg}
)(Chat)
