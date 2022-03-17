import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // Hook to manage the form data, set the initial state to empty strings to get the following expression
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  // destructure the formState object into its named properties
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // is Valid conditional statement
            if (!isValid) {
              setErrorMessage('Your email is invalid.');
            } else {
              if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
              } else {
                setErrorMessage('');
              }
            }
          }

          if(!errorMessage){
              // spread operator ...
              setFormState({ ...formState, [e.target.name]: e.target.value });
          }   
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        {/* name input */}
        <div>
          <label htmlFor='name'>Name:</label>
          {/* handleChange will sync the internal state of the component formState */}
          <input
            type='text'
            defaultValue={name}
            onChange={handleChange}
            name='name'
          />
        </div>
        {/* email input */}
        <div>
          <label htmlFor='email'>Email address:</label>
          <input
            type='email'
            defaultValue={email}
            onBlur={handleChange}
            name='email'
          />
        </div>
        {/* message text area */}
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            defaultValue={message}
            onChange={handleChange}
            rows='5'
          />
        </div>
        {errorMessage && (
            <div>
                <p className='error-test'>{errorMessage}</p>
            </div>
        )}
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
