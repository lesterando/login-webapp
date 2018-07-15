import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './Logo';
import SignInForm from './SignInForm';

ReactDOM.render(
    <div>
        <Logo />
        <SignInForm />
    </div>,
    document.getElementById('root')
);