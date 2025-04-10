import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { loadTheme } from './utils/Theme';

loadTheme(); // ← add this before app loads

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
