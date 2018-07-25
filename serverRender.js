import React from 'react';
import reactDOMSever from 'react-dom/server';
import axios from 'axios';
import App from './src/components/App';

import config from './config';

const serverRender = () =>
  axios.get(config.serverUrl+'/api/contests')
    .then(resp =>{
      return {
        initialMarkup: reactDOMSever.renderToString(
          <App initialContests={resp.data.contests}/>
        ),
        initialData: resp.data
      };
    });


export default serverRender;