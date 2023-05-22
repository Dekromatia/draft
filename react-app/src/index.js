import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StampStore from './store/StampStore';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createContext} from 'react';

export const Context = createContext({ defaultValue: null });
console.log(process.env.REACT_APP_API_URL);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context.Provider value={{
    stamp: new StampStore()
    // item: new StampStore()
  }}>
    <App />
  </Context.Provider>

);

reportWebVitals();



// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />

//   </React.StrictMode>
// );БЫЛО ДО СОЗДАНИЯ STORE


// ВОЗМОЖНО НАДО ИСПОЛЬЗОВАТЬ ПРОВАЙДЕР ВМЕСТО createContext
// import { Provider } from 'mobx-react';

// ReactDOM.render(
//   <Provider stamp={StampStore}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );