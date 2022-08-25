import React from 'react';
import { useTheme } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Nav from '../../components/Nav';
import Testimonials from '../../sections/Testimonials';
import Services from '../../sections/Services';
import styles from './landing.module.css';

function Landing ({ title }) {

    const theme = useTheme();

    return (
        <>
            <Nav />
            <div style={{ marginTop: '60px' }}>
            <Paper className={styles.hero}>
                <img src='./images/astro-1-crop.jpeg' className={styles.img}></img>
            <Typography component="h1" variant="h2"
            sx={{ color: `${theme.palette.primary.light}` }}
            >
        {title}
      </Typography>
            </Paper>
                <Services />
                <Testimonials className={styles.testimonials} />
            </div>
        </>
    );
}

export default Landing;