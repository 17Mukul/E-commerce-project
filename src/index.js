import React from 'react';
import ReactDOM from 'react-dom';

import { Auth0Provider } from '@auth0/auth0-react';

import App from "./Components/App";
import store from "./store/store";
import { Provider } from 'react-redux';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//   <Provider store={store}>
//     <App /> 
//   </Provider>
  
// );
ReactDOM.render( <Provider store={store}> <App />  </Provider> , document.getElementById('root')  );
