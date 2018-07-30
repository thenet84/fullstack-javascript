import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App';

ReactDOM.hydrate(
  <App initialData={window.initialData}/>,
  document.getElementById('root')
);

setTimeout(()=>{
  ReactDOM.hydrate(
    <h2>Clear!!</h2>,
    document.getElementById('root')
  );
},4000);



