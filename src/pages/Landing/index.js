import React from 'react';
import Nav from '../../components/Nav';
import TestimonialCard from '../../components/TestimonialCard';

function Landing () {

    return (
        <>
            <Nav />
            <section style={{ marginTop: '80px' }}>
                <h2>Landing</h2>
                <TestimonialCard />
            </section>
        </>
    );
}

export default Landing;