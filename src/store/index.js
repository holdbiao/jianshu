import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer.js'
import thunk from 'redux-thunk' // redux中间件

const store = createStore(reducer, applyMiddleware(thunk))

export default store

// 1、创建store文件，index.js 和 reducer.js
// 2、利用provider将store注入到组件中
// 3、组件中使用connect来连接到store, 将store的state数据，dispatch的方法映射到组件的props上
// 4、组件触发mapDispathToProps的方法派发一个action
// 5、reducer.js接收到action，更新state的数据
