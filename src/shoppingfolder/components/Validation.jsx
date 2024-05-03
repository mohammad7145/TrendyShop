import React, { useState } from 'react';


const Validation = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [showModal, setShowModal] = useState(false);

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });


        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.username.trim()) {
            validationErrors.username = "Username is required";
        } else if (formData.username.length < 3) {
            validationErrors.username = "Username must be at least 3 characters";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is not valid";
        }

        if (!formData.password.trim()) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            validationErrors.password = "Password must be at least 8 characters";
        }

        if (formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = "Passwords do not match";
        }
        

        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setShowModal(true);
        }
    };

    return (
        <>
            <div className='container'>
                <div className='left-col'>
                    <img src='Assets/form-pic.png' alt='Form-pic' />
                </div>

                <div className='right-col'>
                    <img src='Assets/TrendyShoplogo.png' alt='TrendyShop-logo' className='signup-logo' />
                    <div className='form-card'>
                        <h1 className='signup'>
                            SIGN UP
                        </h1>
                        <form className='errors' onSubmit={handleSubmit}>
                            <div>
                                <input
                                    className='input-field'
                                    type='text'
                                    name='username'
                                    placeholder='Username*'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    value={formData.username}
                                />
                                <div className='notification'>
                                    {errors.username && errors.username}
                                </div>
                            </div>
                            <div>
                                <input
                                    className='input-field'
                                    type='email'
                                    name='email'
                                    placeholder='Email*'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                                <div className='notification'>
                                    {errors.email && errors.email}
                                </div>
                            </div>
                            <div>
                                <input
                                    className='input-field'
                                    type='password'
                                    name='password'
                                    placeholder='Password*'
                                    onChange={handleChange}
                                    value={formData.password}
                                />
                                <div className='notification'>
                                    {errors.password && errors.password}
                                </div>
                            </div>
                            <div>
                                <input
                                    className='input-field'
                                    type='password'
                                    name='confirmPassword'
                                    placeholder='Confirm Password*'
                                    onChange={handleChange}
                                    value={formData.confirmPassword}
                                />
                                <div className='notification'>
                                    {errors.confirmPassword && errors.confirmPassword}
                                </div>
                            </div>
                            <div>
                            <button type='submit' className='signup-button'>Submit</button>
                            {showModal && (
                                <div className="modal">
                                <div className="modal-content">
                                <span className="close" onClick={() => setShowModal(false)}></span>
                                <p>Form submitted successfully</p>
                                </div>
                                </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Validation;