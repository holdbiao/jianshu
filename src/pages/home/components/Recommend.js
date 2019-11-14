import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    RecommendWrapper,
    RecommendItem
} from '../style'

class Recommend extends Component {
    render () {
        const { list } = this.props
        return (
            // src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
            <RecommendWrapper>
                {
                    list.map(item => {
                        return (
                            <RecommendItem img={item.get('img')} key={item.get('id')}></RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})
 
export default connect(mapState, null)(Recommend)