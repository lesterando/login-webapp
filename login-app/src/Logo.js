import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './Logo.css';

class Logo extends Component {

    render() {
        return (
          <div className="container">
            <div className="Logo">
                <div className="App-header">
                    <Image src="../logo.png" className="center" alt="logo" responsive />
                </div>
            </div>
          </div>
        )
    }
}

export default Logo;