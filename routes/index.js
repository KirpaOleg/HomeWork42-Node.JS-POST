const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer();





/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

const getSwapi = async (req, res) => {
  const peopleNum = req.body.person;
  const swapiURL = axios.get(`https://swapi.dev/api/people/${peopleNum}`)
  const swapiName = swapiURL.data.name;
  res.send(`Hello ${swapiName}`);
  console.log(swapiName);
}

router.post('/', upload.none(), async (req, res, next) => {
  getSwapi(req, res) 
});

module.exports = router;
