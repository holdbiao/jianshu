import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultStore = fromJS({ // 将state变成一个不可修改的对象
  focused: false // 搜索栏状态
})

export default (state = defaultStore, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
      // console.log('search_focus')
      return state.set('focused', true) // 使用了immutable写法
  }
  if (action.type === constants.SEARCH_BLUR) {
      // console.log('search_blur')
      return state.set('focused', false)
  }
  return state
}