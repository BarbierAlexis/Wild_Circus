import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndPoint } from './config.js';
import './Css/Contact.css';

function Contact() {

  const [countries, setCountries] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.country && form.message) {
      submitMail();
        const handleRedirection = () => {
          window.location = '/';
        };
        // setOpenGood(true);
        setTimeout(handleRedirection, 5000);
    }
  };
  
  const submitMail = () => {
    axios.post(`${apiEndPoint}/contact`, form)
      .catch((error) => {
        if (error) {
          // setOpenBad(true);
        }
      });
  };

  useEffect (() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) =>{
        setCountries(response.data)
      })
  }, []);

  return (
    <>
        <div className="contact">
        <h2>Contact</h2>
        <form>
          <div className="form-group">
            <input onChange={(event) => setForm({ ...form, name: event.target.value })} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
          </div>
          <div className="form-group">
            <input onChange={(event) => setForm({ ...form, email: event.target.value })} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
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
            <textarea onChange={(event) => setForm({ ...form, message: event.target.value })} className="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>  
        </form>
        <button onClick={handleSubmit} type="button" class="btn btn-warning">SEND !</button>
      </div>
    </>
  );
}

export default Contact;