import React, { useReducer, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import React from 'react'

const App = () => {
  return (
    <>
      <h1>Heading1</h1>
      <h2>Heading2</h2>
    </>
  )
}


const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>)
