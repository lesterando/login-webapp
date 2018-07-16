import React from 'react';
import { Image } from 'react-bootstrap';
import './Logo.css';

const Logo = () =>(
  <div className="container">
    <div className="Logo">
        <div className="App-header">
            <Image src="../logo.png" className="center" alt="logo" responsive />
        </div>
    </div>
  </div>
);

export default Logo;