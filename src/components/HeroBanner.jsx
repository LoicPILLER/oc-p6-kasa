import React from 'react';
import '../styles/HeroBanner.scss';

function HeroBanner({ text, imageUrl, overlayOpacity }) {
    return (
        <div className="hero-banner" style={{ backgroundImage: `url(${imageUrl})`}}>
            <div className="overlay" style={{opacity: `${overlayOpacity}`}}></div>
            <h1>{text}</h1>
        </div>
    );
}

export default HeroBanner;
