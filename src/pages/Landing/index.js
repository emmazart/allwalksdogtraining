import React from 'react';
import Nav from '../../components/Nav';
import Testimonials from '../../sections/Testimonials';

function Landing () {

    return (
        <>
            <Nav />
            <div style={{ marginTop: '80px' }}>
                <h2>Landing</h2>
                <Testimonials />
            </div>
        </>
    );
}

export default Landing;