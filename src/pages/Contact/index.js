import React from 'react';
import Header from '../../sections/Header';
import ContactForm from '../../components/ContactForm';

function Contact ({ title }) {

    return (
        <>
        <Header />
        <h1>{title}</h1>

        {/* FORM UNDER CONSTRUCTION ALERT */}
            <div className='bg-tertiary p-2 w-9/12 rounded'>
                <h3 className="text-md italic text-lightest">This form is currently under construction</h3>
                <h4 className="text-sm italic text-lightest">To contact, please email: allwalksdogtraining@gmail.com</h4>
            </div>
            
        <ContactForm />
        </>
    )
}

export default Contact;