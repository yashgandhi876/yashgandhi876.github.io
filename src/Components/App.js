import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Spinner from './Spinner/Spinner';
import { createRef } from 'react';

class App extends Component {
  state = { spinnerref: createRef() };

  componentDidMount() {
    setTimeout(() => {
      if (this.state.spinnerref.current) {
        this.state.spinnerref.current.classList.add('hidespinner');
      }
    }, 800);
  }

  render() {
    return (
      <div className="main">
        {/* Loading overlay */}
        <div ref={this.state.spinnerref} className="loadingclass">
          <Spinner />
          <p style={{
            fontFamily: 'var(--font-title)',
            color: 'var(--hp-gold)',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            marginTop: 16,
            opacity: 0.7,
          }}>
            OPENING THE CHAMBER...
          </p>
        </div>

        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
