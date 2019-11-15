/* 顯示指定用戶列表的ui組件 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WingBlank, Card, WhiteSpace } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

class UserList extends Component {

    static propTypes = {
        userList: PropTypes.array.isRequired
    }

    render() {

        const { userList } = this.props

        return (
            <WingBlank>
            {
                userList.map(user => (
                    <div key={user._id}>
                        <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                thumb={require(`../../assets/images/${user.header}.png`)}
                                extra={user.username}
                            />
                            <Card.Body>
                                <div>职位: {user.post}</div>
                                {user.company ? <div>公司: {user.company}</div> : null}
                                {user.salary ? <div>月薪: {user.salary}</div> : null}
                                <div>描述: {user.info}</div>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                    </div>
                ))
            }
            </WingBlank>
        )
    }
}

export default withRouter(UserList)