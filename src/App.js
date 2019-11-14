import React from 'react';
import { GlobalStyle } from './style.js'
import { GlobalStyleIconfont } from './static/iconfont/iconfont.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'
import Header from './common/header/index.js'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <GlobalStyleIconfont/>
      {/* 注入store, provider里面的组件都能拿到store数据 */}
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <div className="router-wrapper">
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
