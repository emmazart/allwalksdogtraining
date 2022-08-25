import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import styles from "./services.module.css";

function Services() {

    const theme = useTheme();

  return (
    <section style={{ paddingTop: '1.5rem' }}>
      <Typography component="h2" variant="h3">
        Services
      </Typography>

      {/* DIV FOR FLEXING TRAIL IMAGE AND TEXT */}
      <div className={styles.imgContainer}>
      <img src="./images/trail-crop-2.jpeg" className={styles.img}></img>
      <Typography component="h3" variant="h4">
        Currently booking outdoor & online video conference sessions.
      </Typography>
      </div>

      <Typography component="h4" variant="h5" sx={{ pt: 2.5, pb: 1, mt: 2, fontWeight: 'bold', color: `${theme.palette.primary.dark}` }}>
        What are your training goals?
      </Typography>

      {/* DIV FOR GOALS */}
      <div className={styles.goalsContainer}>
      <Typography component="p" variant="p" className={styles.goal}>
        <span>New dog?</span>Start off strong with establishing boundaries and
        expectations, responding to inappropriate behavior, and building a
        foundation of key obedience skills.
      </Typography>
      <Typography component="p" variant="p" className={`${styles.goal} ${styles.goalLeft}`}>
        <span>Rescuing a dog with baggage?</span>Let's address fear, anxiety,
        bad manners, and poor social skills. Even with old issues, it's
        never too late to shape new behaviors.
      </Typography>
      <Typography component="p" variant="p" className={styles.goal}>
        <span>Why does my dog do that?</span>Maybe you don't need a whole
        training plan or multiple sessions, but you're looking for professional
        advice on a specific behavior. Let's chat!
      </Typography>
      {/* <Typography component="p" variant="p" className={`${styles.goal} ${styles.goalLeft}`}>
        <span>Why does my dog do that?</span>Maybe you don't need a whole
        training plan or multiple sessions, but you're looking for professional
        advice on a specific behavior. Let's chat!
      </Typography>
      <Typography component="p" variant="p" className={styles.goal}>
        <span>Why does my dog do that?</span>Maybe you don't need a whole
        training plan or multiple sessions, but you're looking for professional
        advice on a specific behavior. Let's chat!
      </Typography> */}

      </div>

      {/* DIV FOR FLEXING BUTTON LOCATION */}
      <div className={styles.btnContainer}>
        <Typography component="h3" variant="h5">
          Book your training session
        </Typography>
        <Button component={Link} to="/contact">
          <ArrowCircleRightIcon
            sx={{ m: 1 }}
            fontSize="large"
          ></ArrowCircleRightIcon>
        </Button>
      </div>
    </section>
  );
}

export default Services;
