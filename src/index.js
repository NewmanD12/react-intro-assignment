import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

// class-based component called App
//extends inherits from React.Component 
// in other words: tells App to behave like a component.

import App from './App';
import HomePage from './Pages/HomePage';
import AllMoviesPage from './Pages/AllMoviesPage';
import SingleMoviePage from './Pages/SingleMoviePage';
import AddNewMoviePage from './Pages/AddNewMoviePage';



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index:true,
                element: <HomePage />
            },
            {
                path: '/all-movies',
                element: <AllMoviesPage />
            },
            {
                path: '/single-movie/:filmTitle',
                element: <SingleMoviePage />
            },
            {
                path: '/add-movie',
                element : <AddNewMoviePage />
            }
        ]
    }
])

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

