import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import './index.css';
import App from './App';
import AppV2 from './AppV2';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import StockAnalysisDemoContainer from './containers/stockAnalysisDemoContainer';

let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={AppV2} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
