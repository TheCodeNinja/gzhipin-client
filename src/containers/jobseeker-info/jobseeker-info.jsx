import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'

import HeaderSelector from '../../components/header-selector/header-selector'

class JobSeekerInfo extends Component{
  render() {
    return (
      <div>
        <NavBar>大神完善信息</NavBar>
        <HeaderSelector></HeaderSelector>
        <InputItem placeholder='请输入求职岗位'>求职岗位</InputItem>
        <TextareaItem placeholder='请输入个人介绍' title='个人介绍' rows={3}></TextareaItem>
        <Button type='primary'>保&nbsp;&nbsp;&nbsp;存</Button>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(JobSeekerInfo)