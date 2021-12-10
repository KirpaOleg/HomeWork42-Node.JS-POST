const express = require('express');
const router = express.Router();
const axios = require('axios');
const URL = 'https://swapi.dev/api/people/';


const getPerson = async(getURL, res) => {
  const resultPerson = await axios.get(getURL);
  const name = resultPerson.data.name;
  const films = resultPerson.data.films;

  let listFilms = '';
  films.forEach(element => {
    listFilms += `${element}<br>\n`;
  });

  let listFilmTitle = [];
  for await (let param of films) {
    const result = await axios.get(param);
    console.log(result);
    listTitle = result.data.title;
    listFilmTitle.push(`${listTitle}<br>`);
  }

  res.send(`<table>
              <tr>
                <td>${name}<br></td>
              </tr>
              <tr>
                <td>${listFilms}<br></td>
              </tr>
              <tr>
                <td>${listFilmTitle}<br></td>
              </tr>
            </table>`)
}

router.get('/:param1', (req, res) => {
  const getURL = `${URL}${req.params.param1}`;
  
  getPerson(getURL, res)
   
});

module.exports = router;

