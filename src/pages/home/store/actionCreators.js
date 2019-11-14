import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeHomeListAction = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList
})
export const changeHomeList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      dispatch(changeHomeListAction(result))
    }).catch(err => {
        console.log(err)
    })
  }
}

const homeMore = (result) => ({
  type: constants.HOME_MORE,
  articleList: fromJS(result)
})
export const handleMore = () => {
  return (dispatch) => {
    axios.get('/api/homeMore.json').then(res => {
      const result = res.data.data
      dispatch(homeMore(result))
    }).catch(err => {
        console.log(err)
    })
  }
}

export const scrollTop = (show) => ({
  type: constants.HOME_SCORLL,
  show
})
