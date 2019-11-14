/*
Boss ui container route component
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'

class Boss extends Component {
    render() {
        return (
            <div>
                Boss
            </div>
        )
    }
}
 export default connect(
     state => ({}),
     {}
 )(Boss)