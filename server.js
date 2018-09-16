const express = require('express');
const colors = require('colors');
const app = express();
const json = require('./public/data/data001.json');

const port = process.env.PORT || 3000;
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};

app.use(express.static('public', options));

app.listen(port, () => {
  description();
});

app.get('/', (req, res) => {
  res.send(json);
});

app.get('/file/:id', (req, res) => {
  res.send({id: req.params.id});
});

app.post('/test', (req, res) => {
  res.send({hi: 'world'});
});

const description = () => {
  console.log();
  console.log(colors.green(`----------------------------------------------`));
  console.log(colors.green(`           start server at: ${port}`));
  console.log(colors.green(`----------------------------------------------`));
  console.log();
};
