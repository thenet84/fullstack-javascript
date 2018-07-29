import axios from 'axios';

export const fetchContestList = () => {
  return axios.get('/api/contests')
    .then(
      resp => resp.data.contests
    )
    .catch(console.error);
};

export const fetchContest = (contestId) => {
  return axios.get('/api/contests/'+contestId)
    .then(
      resp => resp.data
    )
    .catch(console.error);
};

