import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'


class Home extends Component {
    render () {
        const bannerIcon = require('../../image/banner.jpeg')
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner" src={bannerIcon} alt="banner"></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home