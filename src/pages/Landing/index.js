import React from 'react';
import Nav from '../../components/Nav';
import Testimonials from '../../sections/Testimonials';
import Services from '../../sections/Services';
import ServiceCard from '../../components/ServiceCard';

function Landing () {

    return (
        <>
            <Nav />
            <div style={{ marginTop: '80px' }}>
                <h2>Landing</h2>
                <Services />
                <ServiceCard />
                <Testimonials />
            </div>
        </>
    );
}

export default Landing;