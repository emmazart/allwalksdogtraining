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
            <div style={{ marginTop: '50px' }}>
            <Paper className={styles.hero}>
                <img src='./images/astro-1-crop.jpeg' className={styles.img}></img>
            <Typography component="h1" variant="h2"
            sx={{ color: `${theme.palette.primary.light}` }}
            >
        {title}
      </Typography>
            </Paper>
            <Typography component='h2' variant='h3' sx={{ p: 2, mt: 2, color: `${theme.palette.primary.main}` }}>Training for dogs & their humans, from all walks of life.</Typography>
            <Typography component='p' variant='p' sx={{ p: 1 }}>
            Whether you're just starting to think about finding the right dog for your family or you have an older pup in need of some new tricks, finding the right trainer can make all the difference. To me, building a positive relationship and strengthening communication skills between you and your dog are the best foundation for making every walk a good one.
            </Typography>
                <Services />
                <Testimonials className={styles.testimonials} />
            </div>
        </>
    );
}

export default Landing;