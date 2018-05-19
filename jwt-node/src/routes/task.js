const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.status(200).json({
      task: 'this is protected stuff'
    });
  } catch (err) {
    res.status(500).json({error: err});
  }
});

module.exports = router;
