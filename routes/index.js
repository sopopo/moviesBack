var express = require('express');
var router = express.Router();

module.exports = router;

const apiMovie = process.env.API_MOVIE;

router.get('https://movies-back-beta.vercel.app/movies', (req, res) => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key='+apiMovie)
      .then(response => response.json())
      .then(data => {
        res.json({ movies: data.results });
      });
   });