import React, { useState } from 'react';
import { signup } from './api/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  HashRouter,
  useHistory,
} from 'react-router-dom';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  let history = useHistory();

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleSignup = (e: any) => {
    e.preventDefault();
    const newErrors: {
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        signup('user', 'user', email, password)
          .then((response) => {
            console.log(response);

            return response.data;
          })
          .then((data) => {
            console.log(data);

            setLoginStatus('User successfully logged in.');
            setTimeout(() => {
              history.push('/login');
            }, 2000);
          })
          .catch((error) => {
            console.error(
              'There was a problem with your login operation:',
              error,
            );
            setLoginStatus('Login failed. Please try again.'); // Update login status message on error
          });
      } catch (error) {
        console.error('Error caught:', error);
        setLoginStatus('An unexpected error occurred.'); // Update login status message on catch
      }
    }
  };
  return (
    <div>
      <h2>
        <span className='back-span'>
          <Link to='/models'> {'<'}Powrót </Link>
        </span>{' '}
        <span className='register-header'>
          {' '}
          Zarejestruj się / <Link to='/login'>Zaloguj</Link>
        </span>
      </h2>
      <form onSubmit={handleSignup}>
        <input
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <input
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        <input
          type='password'
          placeholder='Enter confirm password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
        )}
        <button type='submit'>Signup</button>
        {loginStatus && <p>{loginStatus}</p>}{' '}
      </form>
    </div>
  );
};
export default Signup;
