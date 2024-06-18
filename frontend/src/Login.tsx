import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  HashRouter,
  useHistory,
} from 'react-router-dom';
import { login } from './api/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();
  const [loginStatus, setLoginStatus] = useState('');
  const handleLogin = (e: any) => {
    e.preventDefault();
    try {
      login(email, password)
        .then((response) => {
          if (response.headers['access-token']) {
            localStorage.setItem(
              'access-token',
              response.headers['access-token'].toString(),
            );
            localStorage.setItem(
              'refresh-token',
              response.headers['refresh-token'].toString(),
            );
          }

          return response.data;
        })
        .then((data) => {
          if (data.uuid) {
            localStorage.setItem('uuid', data.uuid);
            setLoginStatus('User successfully logged in.');
            setTimeout(() => {
              history.push('/models');
            }, 1000);
          }
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
  };

  return (
    <div>
      <h2>
        <span className='back-span'>
          <Link to='/models'> {'<'}Powrót </Link>
        </span>{' '}
        <span className='register-header'>
          {' '}
          Zaloguj się / <Link to='/signup'>Zarejestruj się </Link>
        </span>
      </h2>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
      </form>
      {loginStatus && <p>{loginStatus}</p>}{' '}
    </div>
  );
};
export default Login;
