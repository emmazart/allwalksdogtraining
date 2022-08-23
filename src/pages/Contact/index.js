import React from "react";
import { useTheme } from '@mui/material/styles';
import Header from "../../sections/Header";
import ContactForm from "../../components/ContactForm";
import Typography from "@mui/material/Typography";

function Contact({ title }) {

    const theme = useTheme();

  return (
    <>
      <Header />
      <Typography component="h1" variant="h2">
        {title}
      </Typography>

      {/* FORM UNDER CONSTRUCTION ALERT */}
      <div style={{ marginTop: '2rem' }}>
        <Typography component="h2" variant="h5" sx={{ color: `${theme.palette.error.main}`}}>
          This form is currently under construction <br /> To contact, please email: allwalksdogtraining@gmail.com
        </Typography>
      </div>

      {/* CONTACT FORM COMPONENT   */}
      <ContactForm />
    </>
  );
}

export default Contact;
