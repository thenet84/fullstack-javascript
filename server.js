import config from  './config'; 
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';

const server = express();

server.set('view engine', 'ejs');
server.get(['/', '/contest/:contestId'],(req, res) =>{
  serverRender(req.params.contestId)
    .then(({initialMarkup, initialData})=>{
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, ()=>{
  console.info('Express listening on port ' + config.port);
});