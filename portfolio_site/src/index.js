import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Intro/Intro.jsx';
import Projects from './Projects/Projects.jsx';
import Navbar from './Navbar/Navbar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Navbar></Navbar>
        <Intro></Intro>
        <Projects></Projects>
    </div>
);
