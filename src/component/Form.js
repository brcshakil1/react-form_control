import React, { useState } from 'react';
import './Form.css'

const Form = () => {
    const [formData, setFormData] = useState({
                                        email: "",
                                        password: "",
                                        confirmPassword: "",
                                        joinedNewsletter: true
                                    });

    const handleChange = (e) => {
        const {name, type, checked, value} = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const pass= formData.password;
        const currPass = formData.confirmPassword;

        if(pass === currPass) {
            alert("Successfully signed up")
        } else {
            alert("Passwords do not matched")
            return
        }

        if (formData.joinedNewsletter) {
            alert("Thanks for signing up for our newsletter")
        }
        
    }
console.log(formData)
    return (
        <form 
            className='form'
            onSubmit={handleSubmit}
        >
            <input className='ep email'
             type="email"
             name="email"
             placeholder='Email'
             onChange={handleChange}
             value={formData.email}
             />
            <input className='ep'
             type="password"
             name="password"
             placeholder='New Password'
             onChange={handleChange}
             value={formData.password}
            />
            <input className='ep'
             type="password"
             name="confirmPassword"
             placeholder='Confirm Password'
             onChange={handleChange}
             value={formData.confirmPassword}
            />
            <div className='checkbox_container'>
                <input 
                 className='checkbox'
                 type="checkbox"
                 name="joinedNewsletter"
                 id='joinedNewsletter'
                 onChange={handleChange}
                 checked={formData.joinedNewsletter}
                  />
                <label htmlFor="joinedNewsletter">I want to join the newsletter</label>
            </div>
            <button>Sign up</button>
        </form>
    );
};

export default Form;