import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    NavSearchWrapper
} from './style'

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            foucsed: false
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }
    render() {
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavSearchWrapper>
                        <CSSTransition
                            in={this.state.foucsed}
                            timeout={200}
                            classNames="slider">
                            <NavSearch
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                                className={this.state.foucsed ? 'foucsed' : ''}
                                ></NavSearch>
                        </CSSTransition>
                        <i className={this.state.foucsed ? 'iconfont foucsed' : 'iconfont'}>&#58935;</i>
                    </NavSearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    handleFocus (evt) {
        this.setState({
            foucsed: true
        })
    }
    handleBlur (evt) {
        this.setState({
            foucsed: false
        })
    }
}

const mapStateToProps = () => {
    return {

    }
}
const mapDispathToProps = () => {
    return {

    }
}
export default connect(null, null)(Header)
