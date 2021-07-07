import React from 'react';
import Navbar from './nav/Navbar';
import Header from './header/Header';
import Footer from './footer/Footer';
import Textfield from './field/Textfield';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <Header />
    <Textfield />
    <Footer />
    </Router>
  );
}

export default App;
