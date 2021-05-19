const express = require('express');
const router = express.Router();
const sharedPost = require('../models/sharedPost');

router.get('/', (req, res) => {
  sharedPost
    .find({})
    .then((data) => {
      console.log('data: ', data);
      res.json(data);
    })
    .catch((err) => {
      console.log('error: ', err);
    });
});

router.post('/save', (req, res) => {
  console.log('Body: ', req.body);
  const data = req.body;

  const newSharedPost = new sharedPost(data);

  newSharedPost.save((err) => {
    if (err) {
      res.status(500).json({ msg: 'Sorry, internal server error!' });
      return;
    }

    return res.json({
      msg: 'Data has been successfully saved!',
    });
  });
});

module.exports = router;
