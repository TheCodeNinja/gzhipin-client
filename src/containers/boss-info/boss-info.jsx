import React,{ Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'

import HeaderSelector from '../../components/header-selector/header-selector'

class BossInfo extends Component {
    render() {
        return (
            <div>
                <NavBar>老板完善信息</NavBar>
                <HeaderSelector></HeaderSelector>
                <InputItem placeholder='请输入招聘职位'>招聘职位</InputItem>
                <InputItem placeholder='请输入公司名称'>公司名称</InputItem>
                <InputItem placeholder='请输入职位薪资'>职位薪资</InputItem>
                <TextareaItem placeholder='请输入职位薪资' title='职务要求' rows={3}></TextareaItem>
                <Button type='primary'>保&nbsp;&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}

export default connect(
  state => ({}),
  {}
)(BossInfo)