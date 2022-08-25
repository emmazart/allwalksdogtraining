import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { useTheme } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from './subscribe.module.css';

function SubscribeForm() {

    const theme = useTheme();

    // useState for setting error message and form data
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ email: '' });
    const { email } = formState; // deconstruct formState to variables

    // function runs on blur event of form elements
    function handleChange(e) {
        // if target is 'email', run validateEmail helper function to determine correct email format
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // if email does not fit pattern, set error message
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
        // if there's no error message, set blurred data to form state
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    // on form submit, console log data (for now)
    // eventually, send this data to backend?
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return(

        <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            border: `solid ${theme.palette.secondary.main}`,
            // backgroundColor: `${theme.palette.secondary.main}`,
            borderRadius: '15px',
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h3" variant="h6" sx={{ mt: '1rem',  px: 3 }}>
            Subscribe to my newsletter to receive updates about current & future classes!
          </Typography>
          <Box id='subscribe-form' className={styles.form} component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '70%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              defaultValue={email} 
              onBlur={handleChange}
              className={styles.email}
            />
            <Button
              type="submit"
              variant="contained"
              className={styles.btn}
              sx={{ mt: 2, mb: 2, width: '30%' }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    )
}

export default SubscribeForm;