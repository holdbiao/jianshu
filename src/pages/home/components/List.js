import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    ListWrapper,
    ListItem,
    ItemInfo
} from '../style'
class List extends Component {
    render () {
        const { list } = this.props
        return (
            <ListWrapper>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={item.get('id') + index} to={'/detail/' + item.get('id')}>
                                <ListItem>
                                    <img className="img" src={item.get('img')} alt={item.get('title')}></img>
                                    <ItemInfo>
                                        <h1 className="title">{item.get('title')}</h1>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ItemInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
            </ListWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList'])
})

export default connect(mapState, null)(List)