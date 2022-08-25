import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ServiceCard from "../../components/ServiceCard";
import SubscribeForm from "../../components/SubscribeForm";
import Header from "../../sections/Header";
import styles from "./services.module.css";
import { useTheme } from "@mui/material/styles";

function Services({ title }) {
  const services = [
    {
      title: "Ask Me Anything",
      price: "$160",
      description: "get some questions answered!",
      bullets: [
        "it comes with this thing",
        "and this other thing",
        "and this last thing",
      ],
    },
    {
      title: "Ask Me Anything",
      price: "$160",
      description: "get some questions answered!",
      bullets: [
        "it comes with this thing",
        "and this other thing",
        "and this last thing",
      ],
    },
    {
      title: "Ask Me Anything",
      price: "$160",
      description: "get some questions answered!",
      bullets: [
        "it comes with this thing",
        "and this other thing",
        "and this last thing",
      ],
    },
  ];

  const theme = useTheme();

  return (
    <>
      <Header />
      <Typography component="h1" variant="h2" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography component="h2" variant="h5" sx={{ mb: 3 }}>
        Learn how to understand what your pup is telling you and how to best
        respond. <br /> No one is too old to learn new tricks, humans or
        canines.
      </Typography>

      {/* SUBSCRIBE FORM CONTAINER */}
      <SubscribeForm />

      {/* SERVICES CARDS CONTAINER */}
      <div className={styles.servicesContainer}>
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              title={service.title}
              price={service.price}
              description={service.description}
              bullets={service.bullets}
            />
          );
        })}
      </div>

      {/* BOOK SESSION BUTTON */}
      <Button
        variant="contained"
        size="large"
        disableElevation
        component={Link}
        to="/contact"
      >
        Book Your Session
      </Button>

      <Typography component='p' variant='p' textAlign='left' sx={{ px: 2, pt: 3, color: `${theme.palette.primary.dark}`, fontSize: '14px' }}>Sliding scale pricing is available. Please send a note to allwalksdogtraining@gmail.com to inquire.</Typography>
      <Typography component='p' variant='p' textAlign='left' sx={{ px: 2, pt: 1, color: `${theme.palette.primary.dark}`, fontSize: '14px' }}>Pay it Forward:  If you are interested in paying a little extra to support our sliding scale pricing, please ​indicate so when booking your session.</Typography>
    </>
  );
}

export default Services;
