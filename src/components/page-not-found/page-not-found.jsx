import React, { Component } from 'react'
import { Button } from 'antd-mobile'

export default class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h2>Sorry, the page is not found</h2>
                <Button type="primary" onClick={() => this.props.history.replace("/")}>Back to Home</Button>
            </div>
        )
    }
}
