import React, { Component } from 'react'
import { actionCreators } from './store'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
    DetailWrapper,
    Title,
    Content
} from './style'

class Detail extends Component {
    render () {
        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Title>{title}</Title>
                <Content dangerouslySetInnerHTML={{__html: content}}/>
            </DetailWrapper>
        )
    }
    componentDidMount () {
        this.props.getDetail(this.props.match)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) => ({
    getDetail (match) {
        dispatch(actionCreators.getDetail(match.params.id))
    }    
})

export default connect(mapState, mapDispatch)(withRouter(Detail))