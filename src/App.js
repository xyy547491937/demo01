import React, { Component } from 'react';
import Home from './components/Home.js'
import User from './components/User.js'
import DatePicker from 'antd-mobile/lib/date-picker';  // 加载 JS
import 'antd-mobile/lib/date-picker/style/css';        // 加载 CSS
// import 'antd-mobile/lib/date-picker/style';         // 加载 LESS
import {store} from './store.js'
import {Provider} from 'react-redux'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Home/>
          <User></User>
        </div>
      </Provider>

    );
  }
}

export default App;
