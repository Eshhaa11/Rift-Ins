
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import About from './pages/About';
import Services from './pages/Services';
import Home from './pages/Home';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/about",
    element: <About/>,
  },

  {
    path: "/services",
    element: <Services/>,
  },

  {
    path: "/contact",
    element: <Contact/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


