/*
Message ui container route component
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Badge } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

class Message extends Component {
    render() {
        return (
            <List style={{marginTop: 50, marginBottom: 50}}>
                <Item 
                    extra={<Badge text={3}/>}
                    thumb={require(`../../assets/images/头像1.png`)}
                    arrow='horizontal'>
                    Hello <Brief>nr1</Brief>
                </Item>
                <Item 
                    extra={<Badge text={0}/>}
                    thumb={require(`../../assets/images/头像1.png`)}
                    arrow='horizontal'>
                    Hello <Brief>nr2</Brief>
                </Item>
            </List>
        )
    }
}
 export default connect(
     state => ({}),
     {}
 )(Message)