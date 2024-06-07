import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRoute, Routes, Route, BrowserRouter} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

import reportWebVitals from './reportWebVitals';

import './reset.css';
import './styles/index.scss';

import Header from "./components/Header";
import Footer from "./components/Footer"

import HomePage from './pages/HomePage';
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <HelmetProvider>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </HelmetProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
