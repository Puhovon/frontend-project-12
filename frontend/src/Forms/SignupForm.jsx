import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (<>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label htmlFor="repeatPassword">Password</label>
      <input
        id="repeatPassword"
        name="repeatPassword"
        type="repeatPassword"
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
      />
      <button type="submit">Submit</button>
    </form>
    <h2><Link to="/login">LogIn</Link></h2>
  </>
  );
};

export default SignupForm;