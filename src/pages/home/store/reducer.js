// import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultStore = fromJS({ // 将state变成一个不可修改的对象
  topicList: [
    {
      id: 1, 
      img: 'https://upload-images.jianshu.io/upload_images/12677628-df397bccbc2a4752.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      text: '234'
    },
    {
      id: 2, 
      img: 'https://upload-images.jianshu.io/upload_images/12677628-df397bccbc2a4752.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      text: '234'
    }
  ]
})

export default (state = defaultStore, action) => {
  switch (action.type) {
    // case constants.SEARCH_FOCUS:
    //   return state.set('focused', true).set('moveIn', true) // 使用了immutable写法
    // case constants.SEARCH_BLUR:
    //   return state.set('focused', false)
    // case constants.CHANGE_LIST:
    //   // return state.set('list', action.data).set('totalPage', Math.ceil(action.totalPage / 10))
    //   return state.merge({ // 修改多个值的写法
    //     'list': action.data,
    //     'totalPage': Math.ceil(action.totalPage / 10)
    //   })
    // case constants.SEARCH_HOT_LIST:
    //   return state.set('moveIn', false).set('focused', false)
    // case constants.CHANGE_PAGE:
    //   // console.log(action)
    //   return state.set('page',action.data)
    default:
      return state
  }
}