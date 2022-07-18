import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Main from './main/Main';
import RestaurantPage from './restaurantsPage/RestaurantPage';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="restaurant/:id" element={<RestaurantPage/>}/>
          <Route path='*' element={
              <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
