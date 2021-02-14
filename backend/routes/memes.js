const router = require('express').Router();
let Meme = require('../models/meme.model');

router.route('/').get((req, res) => {  
  Meme.find()
    .then(memes => res.json(memes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const name = req.body.name;
  const caption = req.body.caption;
  const url = req.body.url;

  const newMeme = new Meme({
    name,
    caption,
    url
  });

  newMeme.save()
  .then(() => res.json({ id:newMeme._id }))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {    
  Meme.findById(req.params.id)
    .then(meme => res.json(meme))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').post((req, res) => { 
  Meme.findById(req.params.id)
    .then(meme => {
      meme.name = req.body.name;
      meme.caption = req.body.caption;
      meme.url = req.body.url;

      meme.save()
      .then(() => res.json({ id:meme._id }))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;