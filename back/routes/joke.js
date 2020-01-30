const express = require('express');
const path = require('path');
const connection = require('../conf');

const router = express.Router();

router.get('/', (req, res) => {
    connection.query('SELECT * from joke', (err, results) => {
      if (err) {
        console.log(err);
        res.status(400).send('Erreur lors de la récupération des jokes');
      } else {
        res.send(results);
      }
    });
  });

  router.post('/', (req, res) => {
    if (req.body) {
        console.log(req.body)
      const {
        name, country, joke
      } = req.body;
      if (!name || !country || !joke) {
        res.sendStatus(400);
      } else {
        connection.query(`INSERT INTO joke (name, country, joke)
          VALUES (?, ?, ?)`,
        [name, country, joke],
        (err) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          } else {
            res.sendStatus(200);
          }
        });
      }
    } else {
      res.sendStatus(400);
    }
  });

module.exports = router;