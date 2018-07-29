import express from 'express';

import data from '../src/testData';

const router = express.Router();

const contests = data.contests.reduce((obj,contest) =>{
  obj[contest.id] = contest; 
  return obj;
},{});

router.get('/contests', (req, res) =>{
  res.send({
    contests: contests
  });
});

router.get('/contests/:contestId', (req, res) =>{
  let contest = contests[req.params.contestId];
  contest.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  res.send(contest);
});

export default router;