import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocus = {
  type: constants.SEARCH_FOCUS
}

export const searchBlur = {
  type: constants.SEARCH_BLUR
}

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data), // 普通数组修改成immutable类型
  totalPage: data.length
})

export const getList = () => { // 使用了redux-thunk就可以返回方法
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      // console.log(res.data)
      const action = changeList(res.data.data)
      dispatch(action)
    }).catch(err => console.log(err))
  }
}

export const changeMoveIn = {
  type: constants.SEARCH_HOT_LIST
}

export const changePage = (data) => ({
  type: constants.CHANGE_PAGE,
  data
})
