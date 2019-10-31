import React from 'react';
import { GlobalStyle } from './style.js'
import { GlobalStyleIconfont } from './static/iconfont/iconfont.js'
import { Provider } from 'react-redux'
import store from './store'

import Header from './common/header/index.js'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <GlobalStyleIconfont/>
      {/* <Provider store={store}> */}
        <Header></Header>
      {/* </Provider> */}
    </div>
  )
}

export default App;
