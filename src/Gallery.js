import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndPoint } from './config.js';
import './Css/Gallery.css';

function Gallery() {

  const [pictures, setPictures] = useState([]);

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
        <div>
          <img src={`http://localhost:3000/uploads/${picture.name}`} />
        </div>
      )
    })
  };
  return (
    <>
      <h1>Gallery</h1>
      {handleMap()}
    </>
  );
}

export default Gallery;