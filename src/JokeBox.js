import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiEndPoint } from './config.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './Css/JokeBox.css';

function JokeBox() {

const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get(`${apiEndPoint}/joke`)
      .then((response, err) => {
        if (err) {
          throw err;
        } else {
          setJokes(response.data);
        }
      });
  }, []);

  const handleMap = () => {
    return jokes.map((joke, index) => {
        return (
          <GridListTile key={index}>
            <p>"{joke.joke}" <i><b>{joke.name}</b> {joke.country}</i></p>
          </GridListTile>
          
        )
      })
  };

  return (
    <>
    <div className="jokebox">
      <h2>JokeBox</h2>
      <GridList cellHeight={160} cols={1}>
        {handleMap().length > 0 ? handleMap() : <p>Aucune blague</p>}
      </GridList>
      <Link to="/jokepost"><button type="button" class="btn btn-warning">Post a Joke!</button></Link>
    </div>
   
    </>
  );
}

export default JokeBox;