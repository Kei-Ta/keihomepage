const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('kei.ejs');
});

app.use(express.static('public'));

app.listen(3000);
