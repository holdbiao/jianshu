import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux' // 连接store的provider
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import * as loginActionCreators from '../../pages/login/store/actionCreators'
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

class Header extends Component { // 容器组件
    // constructor (props) {
    //     super(props)
    // }
    getListArea () {
        const { list, page } = this.props
        const newList = list.toJS() // immutable数组不能arr[i]取值
        const pageList = []
        if (!newList.length) return
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            if (!newList[i]) break
            pageList.push(
                <SearchInfoItem key={'SearchInfoItem' + i}>{newList[i]}</SearchInfoItem>
            )
        }
        return pageList
    }
    render () {
        const { focused, handleFocus, handleBlur, moveIn, handleMoveLeave, changePage, totalPage, page, list, loginStatus } = this.props // 代码调优
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        loginStatus ?<NavItem className="right logout" onClick={this.props.handleLogout}>退出</NavItem>
                            :(<Link to='/login'>
                                <NavItem className="right">登录</NavItem>
                            </Link>)
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavSearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames="slider">
                            <NavSearch
                                ref="searchInput"
                                onFocus={() => handleFocus(list)}
                                onBlur={handleBlur}
                                className={focused ? 'focused' : ''}
                                ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'iconfont focused' : 'iconfont'}>&#58935;</i>
                        { (focused || moveIn) &&
                            <SearchInfo
                                onMouseLeave={() => handleMoveLeave(this.refs.searchInput)}
                                >
                                <SearchInfoTitle>
                                    热门搜索
                                    <SearchInfoSwitch onClick={() => {changePage(page, totalPage)}}>换一批</SearchInfoSwitch>
                                </SearchInfoTitle>
                                <SearchInfoList>
                                    {/* {
                                        list.map((item, index) => {
                                            return (
                                                <SearchInfoItem key={'SearchInfoItem' + index}>{item}</SearchInfoItem>
                                            )
                                        })
                                    } */}
                                    {
                                        this.getListArea()
                                    }
                                </SearchInfoList>
                            </SearchInfo>
                        }
                    </NavSearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">写文章</Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

// const Header = function (props) { // 无状态组件，有助提高性能
//     return ()
// }

const mapStateToProps = (state) => { // 接收provider的数据, 映射到props上
    return {
        // focused: state.get('header').get('focused') // 合并了reducer，需要修改数据的路径; 使用了immutable对象
        focused: state.getIn(['header', 'focused']), // 第二种写法
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        moveIn: state.getIn(['header', 'moveIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        loginStatus: state.getIn(['login', 'loginStatus'])
    }
}
const mapDispathToProps = (dispatch) => { // dispatch 派发数据到store, 将里面的方法映射到props上
    return {
        handleFocus (list) {
            (list.size === 0) && dispatch(actionCreators.getList()) // thunk的异步方法
            dispatch(actionCreators.searchFocus) // 派发action到dispatch
        },
        handleBlur (evt) {
            dispatch(actionCreators.searchBlur)
        },
        handleMoveLeave (el) {
            el.blur() // 输入框失去焦点
            dispatch(actionCreators.changeMoveIn)
        },
        changePage (page, totalPage) {
            let next = 1
            page < totalPage ? next = page + 1 : next = 1
            dispatch(actionCreators.changePage(next))
        },
        handleLogout () {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header) // 连接store
