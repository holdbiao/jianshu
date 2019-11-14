import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Detail extends PureComponent {
    render () {
        const { loginStatus } = this.props
        // 登陆鉴权
        if (loginStatus) {
            return (
                <div>写文章</div>
            )
        } else {
            return <Redirect to="/login"></Redirect>
        }
            
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'loginStatus'])
})

export default connect(mapState, null)(Detail)