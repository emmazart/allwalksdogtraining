import * as React from 'react';
import Nav from '../../components/Nav';

// Props being passed down from App.js 
function Header ({ title }) {

    return (
        <header>
            <Nav />
            <h1>{title}</h1>
        </header>
    )
}

export default Header;