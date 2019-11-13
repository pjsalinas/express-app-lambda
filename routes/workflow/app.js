/* ..........................................................
 * ..............
 * ....................................................... */
const express = require('express');
const router = express.Router();

/* ..........................................................
 * ............. Initialize Spotify API wrapper .............
 * ....................................................... */
const spotifyApi = require('../../spotify-web-api.js');

/* ..........................................................
 * ..............
 * ....................................................... */
router.get('/', (req, res) => {
  console.log('--you are in Workflow');
  res.status(200).send('<h3>You are in Workflow...!</h3>');
});

/* ..........................................................
 * .............. Echo the Data Sent by the User ............
 * ....................................................... */
router.post('/', (req, res) => {
  console.log('--you made a post request');
  console.log('--body', req.body);
  console.log('--fields', req.body.fields);
  let respJson = {};
  if (
    req.body &&
    req.body.fields &&
    req.body.fields.token &&
    req.body.fields.token === process.env.TOKEN
  ) {
    const {url, note} = req.body.fields;
    respJson = {
      id: '1234567890',
      note: 'this is the place for the note',
    };
    res.status(200);
  } else {
    // we don't have the token. Warn the user.
    res.status(201);
    respJson = {
      warn: 'There is not token...!!!',
    };
  }
  res.json(respJson);
});

/* ..........................................................
 * ..............
 * ....................................................... */
module.exports = router;
