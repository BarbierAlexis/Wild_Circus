import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import JokeBox from './JokeBox';
import JokePost from './JokePost';
import Gallery from './Gallery';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import './Css/App.css';

function App() {
  return (
    <>
      <Router>
      <div className="App" >
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/jokebox" component={JokeBox} />
          <Route path="/jokepost" component={JokePost} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
