import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { changeHomeList, handleMore, scrollTop } from './store/actionCreators'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    MoreBtn,
    GoTop
} from './style'


class Home extends Component {
    handleScrollTop () {
        window.scrollTo(0, 0)
    }
    render () {
        const bannerIcon = require('../../image/banner.jpeg')
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner" src={bannerIcon} alt="banner"></img>
                    <Topic></Topic>
                    <List></List>
                    <MoreBtn onClick={this.props.handleMore}>MORE</MoreBtn>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {
                    this.props.showScrollTop && (
                        <GoTop onClick={this.handleScrollTop}>返回</GoTop>
                    )
                }
            </HomeWrapper>
        )
    }
    componentDidMount () {
        this.props.changeHomeData()
        this.bindScrollEvent()
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this.props.changeScroll)
    }
    bindScrollEvent () {
        window.addEventListener('scroll', this.props.changeScroll)
    }
}

const mapState = (state) => ({
    showScrollTop: state.getIn(['home', 'showScrollTop'])
})

const mapDispath = (dispatch) => ({
    changeHomeData () {
        const action = changeHomeList()
        dispatch(action)
    },
    handleMore () {
        const action = handleMore()
        dispatch(action)
    },
    changeScroll () {
        let top = document.documentElement.scrollTop
        let show = false
        top > 100 ? show = true : show = false
        const action = scrollTop(show)
        dispatch(action)
    }
})

export default connect(mapState, mapDispath)(Home)