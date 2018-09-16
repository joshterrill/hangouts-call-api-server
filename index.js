const express = require('express');
const version = require('./package.json').version;
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`API Version: ${version}.<br /><a href="https://github.com/joshterrill/hangouts-call-api-server#readme">View README</a>`);
});

app.get('/call/:phoneNumber', (req, res) => {
  const {language} = req.query;
  res.redirect(`https://talkgadget.google.com/?hl=${language || 'en'}&ht=0&hcb=0&action=chat&pn=${req.params.phoneNumber}`);
});

app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});