import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndPoint } from './config.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import './Css/Gallery.css';

function Gallery() {

  const [file, setFile] = useState(null);
  const [pictures, setPictures] = useState([]);
  const matches = useMediaQuery('(min-width:420px)')
  const matches2 = useMediaQuery('(min-width:570px)')
  console.log(file)

  useEffect(() => {
    axios.get(`${apiEndPoint}/picture`)
      .then((response, err) => {
        if (err) {
          throw err;
        } else {
          setPictures(response.data);
        }
      });
  }, []);
  const handleMap = () => {
    return pictures.map((picture, index) => {
      return (
        <GridListTile key={index}>
          <img src={`http://localhost:3000/uploads/${picture.name}`} />
        </GridListTile>
      )
    })
  };

  const verif = () => {
    if(matches2 === true ){
      return 3
    } else if(matches === true){
      return 2
    } else {
      return 1
    }
  }

  const handleSubmit = () => {

    axios.post(`${apiEndPoint}/picture`, file)
      .then(() => {
        const handleRedirection = () => {
          window.location = '/gallery';
        };
        setTimeout(handleRedirection, 5000);
      })
      .catch((error) => {
        if (error) {
          console.log(error)
        }
      });
  };

  return (
    <>
    <div className="gallery">
      <h2>Gallery</h2>
      <GridList cellHeight={160} cols={verif()}>
        {handleMap()}
      </GridList>
        <label className="downloadImg" htmlFor="imgInp">
          SELECT FILE
          <input
            onChange={(event) => setFile(event.target.files[0])}
            type="file"
            placeholder="Télécharger une image"
            name="picture"
            maxLength="100"
            id="imgInp"
            style={{ display: 'none' }}
          />
        </label>
        <button onClick={handleSubmit} type="button" class="btn btn-warning">SEND PICTURE !</button>
    </div>
      
    </>
  );
}

export default Gallery;