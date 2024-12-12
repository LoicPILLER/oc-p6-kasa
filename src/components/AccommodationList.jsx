import React, { useState, useEffect } from 'react';
import '../styles/AccomodationList.scss'

import AccommodationPreview from "./AccommodationPreview";

function AccommodationList() {
    const [accommodations, setAccommodations] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setAccommodations(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="accommodations-list">
                {accommodations.map(accommodation => (
                    <AccommodationPreview
                        key={accommodation.id}
                        id={accommodation.id}
                        title={accommodation.title}
                        cover={accommodation.cover}
                    />
                ))}
        </div>
    );
}

export default AccommodationList;