import React from "react";
import TestimonialCard from "../../components/TestimonialCard";

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
    <section>
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
    </section>
  );
}

export default Testimonials;