import React, { PureComponent } from 'react'
import { actionCreators } from './store'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Detail extends PureComponent {
    render () {
        const { loginStatus } = this.props
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => {this.account = input}}/>
                        <Input placeholder="密码" type="password" ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.handleLogin(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to="/"></Redirect>
        }
            
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'loginStatus'])
})
const mapDispatch = (dispatch) => ({
    handleLogin (account, password) {
        dispatch(actionCreators.handleLogin(account.value, password.value))
    }
})
export default connect(mapState, mapDispatch)(Detail)