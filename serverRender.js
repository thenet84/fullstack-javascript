import React from 'react';
import reactDOMSever from 'react-dom/server';
import axios from 'axios';
import App from './src/components/App';

import config from './config';

const getApiUrl = contestId => {
  if(contestId){
    return config.serverUrl+'/api/contests/'+contestId;
  }
  return config.serverUrl+'/api/contests';
};

const getInitialData = (contestId, apiData) => {
  if(contestId){
    return {
      currentContestId: apiData._id,
      contests: { 
        [apiData._id] : apiData
      } 
    };
  }
  return {
    contests: apiData.contests
  };
};

const serverRender = (contestId) =>
  axios.get(getApiUrl(contestId))
    .then(resp =>{
      const initialData = getInitialData(contestId, resp.data);
      return {
        initialMarkup: reactDOMSever.renderToString(
          <App initialData={initialData}/>
        ),
        initialData: initialData
      };
    });


export default serverRender;