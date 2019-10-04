import React from 'react';
import { GlobalStyle } from './style.js'
import { GlobalStyleIconfont } from './static/iconfont/iconfont.js'

import Header from './common/header/index.js'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <GlobalStyleIconfont/>
      <Header></Header>
    </div>
  )
}

export default App;
