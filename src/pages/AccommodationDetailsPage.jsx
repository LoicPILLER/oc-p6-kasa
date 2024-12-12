import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";
import '../styles/AccommodationDetailsPage.scss';
import {Helmet} from "react-helmet-async";

function AccommodationDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [accommodation, setAccommodation] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 0)); // add delay to test loader
            fetch('/data.json')
                .then(response => response.json())
                .then(data => {
                    const foundAccommodation = data.find(item => item.id === id);
                    if (foundAccommodation) {
                        setAccommodation(foundAccommodation);
                    } else {
                        navigate('/404');
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    navigate('/404');
                });
        };
        fetchData();
    }, [id, navigate]);

    if (!accommodation) {
        return (
            <div className="loader"></div>
        );    }

    return (
        <div className="accommodation-details-page">
            <Helmet>
                <title>{accommodation.title} - Kasa</title>
            </Helmet>
            <Carousel picturesArray={accommodation.pictures} />
            <div className="row justify-between">
                <div className="lg-left">
                    <h1>{accommodation.title}</h1>
                    <span className="location">{accommodation.location}</span>
                    <Tags tags={accommodation.tags} />
                </div>
                <div className="lg-right">
                    <Host host={accommodation.host} />
                    <Rating rating={accommodation.rating} />
                </div>
            </div>
            <div className="row">
                <Dropdown
                    name="Description"
                    list={[accommodation.description]}
                />
                <Dropdown
                    name="Équipements"
                    list={accommodation.equipments}
                />
            </div>
        </div>
    );
}

export default AccommodationDetailsPage;
