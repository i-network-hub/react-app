import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Admission from './Admission';
import Contact from './Contact';
import Why from './Why';

class Header extends React.Component {
    render () {
        return (
            <div>
                <Router>
                    <div style={{backgroundColor: '#d8b109'}}>
                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <Link to="/">
                            <a className="navbar-brand" href="index.html">
                                <span>
                                    INH School
                                </span>
                            </a>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                        <Link to="/">
                                            <a className="nav-link" href="index.html"> Home <span className="sr-only">(current)</span></a>
                                        </Link>
                                        </li>
                                        <li className="nav-item ">
                                        <Link to="/about">
                                            <a className="nav-link" href="about.html"> About </a>
                                        </Link>
                                        </li>

                                        <li className="nav-item ">
                                        <Link to="/admission">
                                            <a className="nav-link" href="admission.html"> Admission </a>
                                        </Link>
                                        </li>

                                        <li className="nav-item">
                                        <Link to="/whyus">
                                            <a className="nav-link" href="why.html"> Why Us </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                        <Link to="/contact">
                                            <a className="nav-link" href="contact.html">Contact Us</a>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                </div>
                <Switch>
                    
                    <Route path="/about"><About /></Route>
                    <Route path="/admission"><Admission /></Route>
                    <Route path="/whyus"><Why /></Route>
                    <Route path="/contact"><Contact /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
                </Router>
            </div>
        );
    }
}

export default Header;