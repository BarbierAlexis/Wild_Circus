const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const jokeRouter = require('./routes/joke');
const pictureRouter = require('./routes/picture');
const contactRouter = require('./routes/contact');


const app = express();
const port = 8000;

// permet à un utilisateur d'accéder à des ressources d'un
// serveur situé sur une autre origine que le site courant.
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use('/joke', jokeRouter);
app.use('/picture', pictureRouter);
app.use('/contact', contactRouter);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});