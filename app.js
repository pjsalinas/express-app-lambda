/* ..........................................................
 * ................ LA BELLONERA ............................
 * ..... a Lambda function running on express framework .....
 * ....................................................... */
require('dotenv').config();

/* ..........................................................
 * ..........
 * ....................................................... */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
/* ..........................................................
 * ..........
 * ....................................................... */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

/* ..........................................................
 * ..........
 * ....................................................... */
const workflow = require('./routes/workflow/app');
app.use('/workflow', workflow);

/* ..........................................................
 * ..........
 * ....................................................... */
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

/* ..........................................................
 * ..........
 * ....................................................... */
const PORT = process.env.PORT || 4390;
app.listen(PORT, () => {
  console.log(`App is up and running on port: ${PORT}.`);
});

/* ..........................................................
 * ..........
 * ....................................................... */
//module.exports = app;