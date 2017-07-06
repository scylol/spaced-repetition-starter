import React from 'react';
import { logout } from '../actions/actions';
import '../styles/questions-nav.css';


export default function QuestionsNavbar() {
    const navBarHeader = 'Questions Nav Bar';
    const button = 'Log Out';

    return(
        <div className='navBarHeader'>
            <h1>{navBarHeader}</h1>
            <button className='login_button' >
                {button}
            </button>
        </div>
        );
}
