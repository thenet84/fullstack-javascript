import {MongoClient} from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, client) =>{
  assert.equal(null, err);
  const db = client.db('tests');

  let contestCount = 0;
  db.collection('contests').find({}).each((err,contest) =>{
    assert.equal(null, err);
    if(!contest){
      return;
    }

    contestCount++;
    db.collection('names').find({id : {$in : contest.nameIds}})
      .project({_id: 1})
      .toArray()
      .then(_ids =>{
        let newIds = _ids.map(i=>i._id);
        db.collection('contests').updateOne(
          {'id': contest.id},
          {$set: {'nameIds': newIds}}
        ).then(()=>{
          contestCount--;
          if(contestCount===0)client.close();
          console.log('Updated');
        });
      });


  });
});