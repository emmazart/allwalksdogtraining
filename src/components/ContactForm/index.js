import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import RadioList from '../../components/RadioGroup';

function ContactForm() {

    // useState for setting error message and form data
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', dogName: '', choice: '', message: ''});
    const { firstName, lastName, email, dogName, choice, message } = formState; // deconstruct formState to variables

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
        // if any of the other form elements have no content, set error message
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
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

        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h2" variant="h5">
            Have additional questions? <br /> Ready to schedule a session?
          </Typography>
          <Typography component="h3" variant="h7" sx={{ mt: '1rem' }}>
            Please fill out the form below!
          </Typography>
          <Box id='contact-form' component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              name="firstName"
              label="First Name"
              type="firstName"
              id="firstName"
              defaultValue={firstName} 
              onBlur={handleChange}
              sx={{ width: '48%', mr: '5px' }}
            />
            <TextField
              margin="normal"
              required
              name="lastName"
              label="Last Name"
              type="lastName"
              id="lastName"
              defaultValue={lastName} 
              onBlur={handleChange}
              sx={{ width: '49%', ml: '5px' }}
            />
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="dogName"
              label="Your Dog's Name"
              name="dogName"
              defaultValue={dogName} onBlur={handleChange}
            />
            <RadioList formState={formState} setFormState={setFormState} />
            <TextField
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline={true}
              rows={3}
              defaultValue={message} 
              onBlur={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>

            // <form id='contact-form' className="pt-2 mt-1" onSubmit={handleSubmit}>

            //     {/* NAME INPUT */}
            //     <div className='flex justify-between py-1 my-2'>
            //         <label className='mx-2'>Name:</label>
            //         <input 
            //             className="border rounded-md"
            //             type="text" name='name' defaultValue={name} onBlur={handleChange}>    
            //         </input>
            //     </div>

            //     {/* EMAIL INPUT */}
            //     <div className='flex justify-between py-1 my-2'>
            //         <label className='mx-2'>Email:</label>
            //         <input 
            //             className="border rounded-md"
            //             type='email' name='email' defaultValue={email} onBlur={handleChange}>
            //         </input>
            //     </div>

            //     {/* MESSAGE INPUT */}
            //     <div className='flex justify-between py-1 my-2'>
            //         <label className='mx-2'>Message:</label>
            //         <textarea 
            //             className="border rounded-md resize-none"
            //             name='message' rows='5' defaultValue={message} onBlur={handleChange}></textarea>
            //     </div>

            //     {/* CONDITIONAL ERROR MESSAGE */}
            //     {errorMessage && (
            //         <p className='my-1 py-1 italic text-tertiary font-bold'>{errorMessage}</p>
            //     )}

            //     {/* SUBMIT BUTTON */}
            //     <button 
            //         className="bg-tangerine p-2 rounded-md" 
            //         data-testid='button' type='submit'>
            //         Submit
            //     </button>
            // </form>
    )
}

export default ContactForm;