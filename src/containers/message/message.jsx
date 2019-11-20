/*
Message ui container route component
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Badge } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

function getLastMsgs(chatMsgs) {

    // 1. Group the messages by chatId, and store the last message of each group to lastMsgObj
    // Create empty object
    let lastMsgObj = {} // {chatId1: {lastMsg1}, chatId2: {lastMsg2}, ...}
    // Loop chatMsgs array
    chatMsgs.forEach(msg => {
        // Get the message chatId
        const chatId = msg.chat_id
        // Check if lastMsgObj exists a message belong to this chatId
        let message = lastMsgObj[chatId]
        if (!message) { // Not exists a message belong to this chatId
            lastMsgObj[chatId] = msg
        }
        else { // Exists a message belong to this chatId
            // Compare the current message with the existed message
            // Only store the latest message for this chatId in lastMsgObj
            if (msg.created_at - message.created_at) {
                lastMsgObj[chatId] = msg
            }
        }
    })
    console.log(lastMsgObj)

    // 2. Tranform the object to array
    const lastMsgs = Object.values(lastMsgObj)

    // 3. Sort the array
    lastMsgs.sort(function(m1, m2) {
        return m2.created_at - m1.created_at
    })
    
    // Return the array
    return lastMsgs
}

class Message extends Component {
    render() {
        const {user} = this.props
        const {users, chatMsgs} = this.props.chat
        console.log("[ chatMsgs ]")
        console.log(chatMsgs)
        // 对chatMsgs根据chat_id进行分组
        const lastMsgs = getLastMsgs(chatMsgs)

        return (
            <List style={{marginTop: 50, marginBottom: 50}}>
            {
                lastMsgs.map(msg => {
                    const targetUserId = msg.to === user._id ? msg.from : msg.to
                    const targetUser = users[targetUserId]
                    return (
                        <Item 
                            key={msg._id}
                            extra={<Badge text={"0"}/>}
                            thumb={targetUser.header ? require(`../../assets/images/${targetUser.header}.png`) : null}
                            arrow='horizontal'
                            onClick={() => this.props.history.push(`/chat/${targetUserId}`)}>
                            {msg.content}
                            <Brief>{targetUser ? targetUser.username : null}</Brief>
                        </Item>
                    )
                })
            }
            </List>
        )
    }
}

export default connect(
    state => ({user: state.user, chat: state.chat}),
    {}
)(Message)