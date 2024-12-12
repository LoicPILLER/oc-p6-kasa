import {Helmet} from "react-helmet-async";

import HeroBanner from "../components/HeroBanner";
import heroBannerBg from "../assets/img/home-hero-banner-bg.png";
import AccommodationList from "../components/AccommodationList";

function HomePage() {
    return (
        <div className="home-page">
            <Helmet>
                <title>Accueil - Kasa</title>
            </Helmet>
            <HeroBanner
                text="Chez vous, partout et ailleurs"
                imageUrl={heroBannerBg}
                overlayOpacity={0.6}
            />
            <AccommodationList />
        </div>
    );
}

export default HomePage;
