import React from 'react';
import Header from '../../sections/Header';

// passing title props from Routing element on App.js through page 
// to Header component to render page title dynamically

function About ({ title }) {

    return (
        <>
        <Header title={title} />
        </>
    )
}

export default About;