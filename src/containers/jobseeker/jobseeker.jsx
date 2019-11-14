/*
JobSeeker ui container route component
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'

class JobSeeker extends Component {
    render() {
        return (
            <div>
                JobSeeker
            </div>
        )
    }
}
 export default connect(
     state => ({}),
     {}
 )(JobSeeker)