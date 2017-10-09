import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import '../components/css/header.css';

const Header = (props) =>
      <div>
        <div className="header-wrap clearfix">{/*header-wrap*/}
        <nav className="navbar navbar-inverse">
        <div className="container-fluid center-page">
          <div className="navbar-header">
            <Link to={'/Login'} className="navbar-brand"><img src={require('../components/images/uibrotherlogoone.png')} alt="img" className="logoimg"/><span className="logotext">UI Brothers</span></Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to={'/Login'} activeClassName={'active'}><span>Login</span></Link></li>
            <li><Link to={'/Home'} activeClassName={'active'}><span>Home</span></Link></li>
            <li><a href="#"><span>About us</span></a></li>
            <li><a href="#"><span>Contact</span></a></li>
          </ul>
        </div>
      </nav>
      </div>{/*end header-wrap*/}
    </div>

export default Header;
