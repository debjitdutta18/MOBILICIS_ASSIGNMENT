// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//           <App />
//     </BrowserRouter>
//   </React.StrictMode>
  
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from './service/apiSlice';

// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
      {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
   
    
   
  </React.StrictMode>
);

