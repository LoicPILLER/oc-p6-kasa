import Dropdown from "../components/Dropdown";
import {Helmet} from "react-helmet-async";

import HeroBanner from "../components/HeroBanner";
import heroBannerBg from "../assets/img/home-hero-banner-bg.png";

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
            <Dropdown name="Test" list={['elem1', 'elem2']} />
        </div>
    );
}

export default HomePage;
