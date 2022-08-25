import React from 'react';
import Nav from '../../components/Nav';
import Testimonials from '../../sections/Testimonials';
import Services from '../../sections/Services';
import styles from './landing.module.css';

function Landing () {

    return (
        <>
            <Nav />
            <div style={{ marginTop: '80px' }}>
                <h2>Landing</h2>
                <Services />
                <Testimonials className={styles.testimonials} />
            </div>
        </>
    );
}

export default Landing;