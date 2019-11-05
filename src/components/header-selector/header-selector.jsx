/* 头像选择UI組件 */

import React, { Component } from 'react'
import { List, Grid } from 'antd-mobile'

export default class HeaderSelctor extends Component {

    // Constructor
    constructor(props) {
        super(props);
        // 准备好数据
        this.headerList = [];
        for (let i = 0; i < 20; i++) {
            this.headerList.push({
                text: '头像' + (i + 1),
                icon: require(`../../assets/images/头像${i + 1}.png`) // 不能使用import
            })
        }
    }

    render() {
        const listHeader = '请选择头像'
        return (
            <List renderHeader={() => listHeader}>
                <Grid data={this.headerList} columnNum={5}></Grid>
            </List>
        )
    }
}