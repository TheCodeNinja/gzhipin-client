import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'

import HeaderSelector from '../../components/header-selector/header-selector'

class JobSeekerInfo extends Component {

    state = {
        post: '',
        info: '',
    }

    //更新头像数据
    setHeader = (header) => {
        this.setState({
            header
        })
    }

    handleChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    handleSave = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <NavBar>大神完善信息</NavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>
                <InputItem placeholder='请输入求职岗位' onChange={val => (this.handleChange('post', val))}>求职岗位</InputItem>
                <TextareaItem placeholder='请输入个人介绍' title='个人介绍' rows={3} onChange={val => (this.handleChange('info', val))}></TextareaItem>
                <Button type='primary' onClick={this.handleSave}>保&nbsp;&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}

export default connect(
  state => ({}),
  {}
)(JobSeekerInfo)