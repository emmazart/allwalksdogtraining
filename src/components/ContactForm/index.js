import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    // useState for setting error message and form data
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState; // deconstruct formState to variables

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
        // if either of the other form elements have no content, set error message
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
            <form id='contact-form' className="pt-2 mt-1" onSubmit={handleSubmit}>

                {/* NAME INPUT */}
                <div className='flex justify-between py-1 my-2'>
                    <label className='mx-2'>Name:</label>
                    <input 
                        className="border rounded-md"
                        type="text" name='name' defaultValue={name} onBlur={handleChange}>    
                    </input>
                </div>

                {/* EMAIL INPUT */}
                <div className='flex justify-between py-1 my-2'>
                    <label className='mx-2'>Email:</label>
                    <input 
                        className="border rounded-md"
                        type='email' name='email' defaultValue={email} onBlur={handleChange}>
                    </input>
                </div>

                {/* MESSAGE INPUT */}
                <div className='flex justify-between py-1 my-2'>
                    <label className='mx-2'>Message:</label>
                    <textarea 
                        className="border rounded-md resize-none"
                        name='message' rows='5' defaultValue={message} onBlur={handleChange}></textarea>
                </div>

                {/* CONDITIONAL ERROR MESSAGE */}
                {errorMessage && (
                    <p className='my-1 py-1 italic text-tertiary font-bold'>{errorMessage}</p>
                )}

                {/* SUBMIT BUTTON */}
                <button 
                    className="bg-tangerine p-2 rounded-md" 
                    data-testid='button' type='submit'>
                    Submit
                </button>
            </form>
    )
}

export default ContactForm;