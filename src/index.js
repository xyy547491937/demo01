import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DatePicker from 'antd-mobile/lib/date-picker';  // 加载 JS
import 'antd-mobile/lib/date-picker/style/css';         // 加载 CSS
// import 'antd-mobile/lib/date-picker/style';         // 加载 LESS
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
