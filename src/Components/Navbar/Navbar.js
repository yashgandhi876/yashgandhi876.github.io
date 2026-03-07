import React, { Component, createRef } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.menuRef = createRef();
    this.navRef  = createRef();
    this.state = { open: false, scrolled: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrolled: window.scrollY > 60 });
  };

  toggle = () => this.setState(s => ({ open: !s.open }));
  close  = () => this.setState({ open: false });

  scrollTo = (id) => {
    this.close();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    const { scrolled, open } = this.state;
    return (
      <nav className={`hp-nav${scrolled ? ' hp-nav--scrolled' : ''}`} ref={this.navRef}>
        <div className="hp-nav__inner">
          {/* Logo / Monogram */}
          <button className="hp-nav__brand" onClick={() => this.scrollTo('hero')}>
            <span className="hp-nav__crest">✦</span>
            <span className="hp-nav__name">Yash Gandhi</span>
          </button>

          {/* Desktop links */}
          <ul className="hp-nav__links">
            {[
              { label: 'I · About',      id: 'about'      },
              { label: 'II · Journey',   id: 'experience' },
              { label: 'III · Spells',   id: 'skills'     },
              { label: 'IV · Artifacts', id: 'projects'   },
              { label: 'V · Owl Post',   id: 'contact'    },
            ].map(item => (
              <li key={item.id}>
                <button onClick={() => this.scrollTo(item.id)} className="hp-nav__link">
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/yashgandhi876/yashgandhi876.github.io/raw/master/YashGandhiResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hp-nav__resume"
              >
                <span className="hp-nav__resume-icon">📜</span>
                Résumé
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`hp-nav__burger${open ? ' is-open' : ''}`}
            onClick={this.toggle}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`hp-nav__drawer${open ? ' is-open' : ''}`} ref={this.menuRef}>
          {[
            { label: 'Chapter I · About',        id: 'about'      },
            { label: 'Chapter II · Journey',     id: 'experience' },
            { label: 'Chapter III · Spells',     id: 'skills'     },
            { label: 'Chapter IV · Artifacts',   id: 'projects'   },
            { label: 'Chapter V · Owl Post',     id: 'contact'    },
          ].map(item => (
            <button key={item.id} onClick={() => this.scrollTo(item.id)} className="hp-nav__drawer-link">
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    );
  }
}

export default Navbar;
