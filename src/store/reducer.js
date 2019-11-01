// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable' // 使用了immutable对象
import { reducer as headerReducer } from '../common/header/store'

export default combineReducers({ // 合并reducer
    header: headerReducer
})

// const defaultStore = {
//     foucsed: false // 搜索栏状态
// }

// export default (state = defaultStore, action) => {
//     if (action.type === 'search_focus') {
//         // console.log('search_focus')
//         let temp = {...state}
//         temp.foucsed = true
//         return temp
//     }
//     if (action.type === 'search_blur') {
//         // console.log('search_blur')
//         let temp = {...state}
//         temp.foucsed = false
//         return temp
//     }
//     return state
// }