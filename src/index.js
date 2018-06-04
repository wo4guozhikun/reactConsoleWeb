import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import './styles/index.less';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";
import stores from "./store/index"
import { BrowserRouter } from "react-router-dom";

let store = createStore(stores);

ReactDOM.render(
	<Provider store={store}>
	    <BrowserRouter>
	      <App />
	    </BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
