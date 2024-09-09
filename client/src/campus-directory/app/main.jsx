import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('directory-listing');
  const root = createRoot(target);
  root.render(<App />)
})
