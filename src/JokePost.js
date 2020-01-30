import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndPoint } from './config.js';
import './Css/JokePost.css';

function JokePost() {
  const [countries, setCountries] = useState([]);
  const [statusServeur, setStatusServeur] = useState(true);
  const [form, setForm] = useState({
    name: '',
    country: '',
    joke: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.country && form.joke) {
      submitJoke();
    }
  };

  useEffect (() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) =>{
        setCountries(response.data)
      })
  }, []);
  
  const submitJoke = () => {
    axios.post(`${apiEndPoint}/joke`, form)
      .then(() => {
        const handleRedirection = () => {
          window.location = '/jokebox';
        };
        setStatusServeur(statusServeur);
        // setOpenGood(true);
        setTimeout(handleRedirection, 5000);
      })
      .catch((error) => {
        if (error) {
          // setOpenBad(true);
        }
      });
  };

  return (
    <>
      <div className="jokepost">
        <h2>JokePost</h2>
        <form>
          <div className="form-group">
            <input onChange={(event) => setForm({ ...form, name: event.target.value })} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
          </div>
          <div className="form-group">
            <select onChange={(event) => setForm({ ...form, country: event.target.value })} className="form-control" id="exampleFormControlSelect1">
              <option>Country</option>
              {countries.map((country)=>{
                return <option>{country.name}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <textarea onChange={(event) => setForm({ ...form, joke: event.target.value })} className="form-control" placeholder="Your best joke !" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
        <button onClick={handleSubmit} type="button" class="btn btn-warning">Post !</button>
      </div>
      
    </>
  );
}

export default JokePost;