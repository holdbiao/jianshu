import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultStore = fromJS({ // 将state变成一个不可修改的对象
  topicList: [],
  articleList: [],
  recommendList: [
    {
      id: 1,
      img: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
      id: 2,
      img: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 3,
      img: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 4,
      img: 'https:////cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ],
  showScrollTop: false
})

const changeHomeList = (state, action) => {
  return state.merge({
    'topicList': fromJS(action.topicList),
    'articleList': fromJS(action.articleList)
  })
}

export default (state = defaultStore, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeList(state, action) //精简switch结构
    case constants.HOME_MORE:
      return state.set('articleList', state.get('articleList').concat(action.articleList))
    case constants.HOME_SCORLL:
      return state.set('showScrollTop', action.show)
    // case constants.SEARCH_HOT_LIST:
    //   return state.set('moveIn', false).set('focused', false)
    // case constants.CHANGE_PAGE:
    //   // console.log(action)
    //   return state.set('page',action.data)
    default:
      return state
  }
}