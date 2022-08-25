import React from "react";
import TestimonialCard from "../../components/TestimonialCard";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
import styles from "./testimonial.module.css";

function Testimonials() {
  const testimonials = [
    {
      client: "Meredyth G. & Auggie",
      highlight:
        "Jaime helped me and my new best friend Auggie to get comfortable with commands and learn to really trust each other.",
      reviewText:
        "Auggie particularly had a problem with pulling on the leash when I first brought him home, but together with Jaime's help, we're well on our way to being great on leash! Super grateful for the techniques Jaime has given me so far and the patience shown with me in learning them. I couldn't recommend them enough to help train you and your furry children!",
    },
    {
      client: "Meredyth G. & Auggie",
      highlight:
        "Jaime helped me and my new best friend Auggie to get comfortable with commands and learn to really trust each other.",
      reviewText:
        "Auggie particularly had a problem with pulling on the leash when I first brought him home, but together with Jaime's help, we're well on our way to being great on leash! Super grateful for the techniques Jaime has given me so far and the patience shown with me in learning them. I couldn't recommend them enough to help train you and your furry children!",
    },
    {
      client: "Meredyth G. & Auggie",
      highlight:
        "Jaime helped me and my new best friend Auggie to get comfortable with commands and learn to really trust each other.",
      reviewText:
        "Auggie particularly had a problem with pulling on the leash when I first brought him home, but together with Jaime's help, we're well on our way to being great on leash! Super grateful for the techniques Jaime has given me so far and the patience shown with me in learning them. I couldn't recommend them enough to help train you and your furry children!",
    },
  ];

  return (
    <section className={styles.section}>
      <Typography component="h2" variant="h3">
        Testimonials
      </Typography>

      {/* TESTIMONIALS CONTAINER FOR FORMATTING */}
      <div className={styles.testimonailsContainer}>
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialCard
              key={index}
              client={testimonial.client}
              highlight={testimonial.highlight}
              reviewText={testimonial.reviewText}
            />
          );
        })}
      </div>

      {/* DIV FOR FLEXING BUTTON LOCATION */}
      <div className={styles.btnContainer}>
      <Typography component='h3' variant='h5'>Learn about my training style</Typography>
      <Button component={Link} to="/about">
        <ArrowCircleRightIcon sx={{ m: 1 }} fontSize='large'></ArrowCircleRightIcon>
      </Button>
      </div>
    </section>
  );
}

export default Testimonials;
