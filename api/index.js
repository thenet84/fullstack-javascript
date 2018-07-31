import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, client) => {
  assert.equal(null, err);
  mdb = client.db('tests');
});

const router = express.Router();

/*const contests = data.contests.reduce((obj,contest) =>{
  obj[contest.id] = contest; 
  return obj;
},{});*/

router.get('/contests', (req, res) =>{
  let contests = {};
  mdb.collection('contests').find({})
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1
    })
    .each((err, contest) => {
      assert.equal(null, err);
      if(!contest){
        res.send({
          contests: contests
        });
        return;
      }
      contests[contest.id] = contest;
    });
});

router.get('/contests/:contestId', (req, res) =>{
  mdb.collection('contests').findOne({id: Number(req.params.contestId)})
    .then(contest => res.send(contest))
    .catch(console.error);
});

export default router;