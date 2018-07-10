import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App.js';
import counter from './reducers';



const store = createStore(counter);

/*const render = () => ReactDOM.render( 
   <App
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('app')
 );
  
  render();
store.subscribe(render);//先执行挂载，然后再让redux挂载以方便redux修改时响应*/
ReactDOM.render( 
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('app')
 );
 