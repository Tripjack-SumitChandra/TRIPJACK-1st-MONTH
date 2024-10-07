import React from 'react';
import ReactDOM from 'react-dom/client';
import {App , About} from './App'


const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

root.render(
    <>
        <App name='sumit' />
        <About />
    </>
);