const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const balanceRoutes = require('./controllers/balanceRoutes');
require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/balances', balanceRoutes);

app.listen(3000, () => {
  console.log('i am watching....')
});
