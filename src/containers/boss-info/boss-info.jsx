import React,{ Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'

import HeaderSelector from '../../components/header-selector/header-selector'

class BossInfo extends Component {

    state = {
        header: '',
        post:'',
        info:'',
        company:'',
        salary:'',
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
                <NavBar>老板完善信息</NavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>
                <InputItem placeholder='请输入招聘职位' onChange={val => (this.handleChange('post', val))}>招聘职位</InputItem>
                <InputItem placeholder='请输入公司名称' onChange={val => (this.handleChange('company', val))}>公司名称</InputItem>
                <InputItem placeholder='请输入职位薪资' onChange={val => (this.handleChange('salary', val))}>职位薪资</InputItem>
                <TextareaItem placeholder='请输入职务要求' title='职务要求' rows={3} onChange={val => (this.handleChange('info', val))}></TextareaItem>
                <Button type='primary' onClick={this.handleSave}>保&nbsp;&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}

export default connect(
  state => ({}),
  {}
)(BossInfo)