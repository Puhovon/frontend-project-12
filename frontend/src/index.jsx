import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import SignupForm from './Forms/SignupForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './errorPage';
import LogInForm from './Forms/LogInForm';
import Chats from './Chats.jsx';
import store from './slices/index.js';
import { Provider } from 'react-redux';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Chats />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <SignupForm />
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider >
  </React.StrictMode>
);