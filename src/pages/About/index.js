import React from "react";
import Header from "../../sections/Header";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


// passing title props from Routing element on App.js through page
// to Header component to render page title dynamically

function About({ title }) {
  return (
    <>
      <Header title={title} />
      <section>
        <h2>Hi, I'm Jaime!</h2>
        <p>
          All Walks Dog Training is run and owned by me, Jaime Rossow, out of
          Northfield, Minnesota. I've been working with dogs for over 9 years in
          a variety of capacities, including dog training, grooming, walking,
          boarding & sitting. I've lived and worked with pups in big cities and
          small towns.
        </p>
        <p>
          I do this work because I love dogs, of course, and I also love
          teaching people about dogs and I'm excited for each opportunity to do
          so.
          <br />
          And I'm excited to say hi to your dog!
        </p>
      </section>
      <section>
        <h2>Training Philosophy</h2>
        <p>
          My training techniques center positive experiences and clear
          communication to build a strong relationship between you and your dog.
          We'll go over important behavioral cues your dog may be giving you and
          talk about how you can best speak their language. We will establish a
          strong foundation of obedience skills and tailor the training
          structure to your dog & your lifestyle.
        </p>
        <img src="http://placekitten.com/200/300" alt="placeholder"></img>
        <img src="http://placekitten.com/200/300" alt="placeholder"></img>
        <p>
          With well-rounded enrichment and built-in structure, your dog will be
          secure, confident, and happy (and you will too!) My techniques are
          scientifically informed and personalized to fit your specific
          circumstances. I draw on expertise from industry experts including
          Brenda Aloff, Patricia McConnell, and Karen Pryor.
        </p>
        <h3>Dog training is really mostly training for humans.</h3>
        <p>
          ​I'll make sure you understand why your dog does what they do, and
          that you know the principles of training techniques so you can make
          informed adjustments. A big part of dog training is building your own
          self-awareness. I know it's hard! I'll give you the tools you need to
          train yourself too.
        </p>
      </section>
      <section>
        <h2>Credentials</h2>
        <p>
          Dog training is a constantly evolving field and I am dedicated to my
          continued learning & professional development. I am a Certified Canine
          Training and Behavior Specialist and Certified Advanced Canine
          Training Professional, through the Animal Behavior Institute*.
        </p>
        <p>
          *accredited by the International Association for Continuing Education
          and Training and accepted by the Certification Council for
          Professional Dog Trainers.
        </p>
      </section>
      <Button variant="contained" size="large" disableElevation component={Link} to="/contact">
        Book Your Session
      </Button>
    </>
  );
}

export default About;
