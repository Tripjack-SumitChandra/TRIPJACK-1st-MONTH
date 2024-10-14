import React from "react";
import ReactDom from 'react-dom/client'
import App from "./App";

const domroot = document.getElementById('root')
const root = ReactDom.createRoot(domroot)

root.render(<App/>)