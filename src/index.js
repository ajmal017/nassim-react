import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import dotenv from 'dotenv';
dotenv.config();

ReactDOM.render(
<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
