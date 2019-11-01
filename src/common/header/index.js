import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux' // 连接store的provider
import { actionCreators } from './store'

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    NavSearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style'

const Header = function (props) { // 无状态组件，有助提高性能
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
                        in={props.focused}
                        timeout={300}
                        classNames="slider">
                        <NavSearch
                            onFocus={props.handleFocus}
                            onBlur={props.handleBlur}
                            className={props.focused ? 'focused' : ''}
                            ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'iconfont focused' : 'iconfont'}>&#58935;</i>
                    { props.focused &&
                        <SearchInfo>
                            <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch>换一批</SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchInfoList>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                            </SearchInfoList>
                        </SearchInfo>
                    }
                </NavSearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting">写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

// class Header extends Component { // 普通容器组件定义
//     constructor (props) {
//         super(props)
//     }
//     render() {
//         return (
            
//         )
//     }
// }

const mapStateToProps = (state) => { // 接收provider的数据, 映射到props上
    return {
        // focused: state.get('header').get('focused') // 合并了reducer，需要修改数据的路径; 使用了immutable对象
        focused: state.getIn(['header', 'focused']) // 第二种写法
    }
}
const mapDispathToProps = (dispatch) => { // dispatch 派发数据到store, 将里面的方法映射到props上
    return {
        handleFocus (evt) {
            dispatch(actionCreators.searchFocus) // 派发action到dispatch
        },
        handleBlur (evt) {
            dispatch(actionCreators.searchBlur)
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header) // 连接store
