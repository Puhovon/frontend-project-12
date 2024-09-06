import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import SignupForm from './Forms/SignupForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './errorPage';
import LogInForm from './Forms/LogInForm';
import Chat from './Chat';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Chat />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <SignupForm/>
  },
  {
    path: '/login',
    element: <LogInForm />,
    errorElement: <ErrorPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);