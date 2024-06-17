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

const Dashboard = () => {
  let history = useHistory();

  const handleGetConfigurations = (e: any) => {
    e.preventDefault();
    try {
      fetch('http://localhost:3001/configurations', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userUuid: localStorage.getItem('uuid'),
        }),
      })
        .then((response) => response.json())
        .then((data) => {})
        .catch((error) => console.error('Error:', error));
    } catch {}
  };

  return <div></div>;
};
export default Dashboard;
