import {Helmet} from "react-helmet-async";
import Dropdown from "../components/Dropdown";

import '../styles/AboutPage.scss'
import HeroBanner from "../components/HeroBanner";
import heroBannerBg from "../assets/img/about-hero-banner-bg.png";

const AboutPage = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>A propos - Kasa</title>
            </Helmet>
            <HeroBanner
                text=""
                imageUrl={heroBannerBg}
                overlayOpacity={0.3}
            />
            <section>
                <Dropdown name="Fiabilité" list={["Les annonces postées sur Kasa garantissent une fiabilité totale. " +
                "Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."]} />
                <Dropdown name="Respect" list={["La bienveillance fait partie des valeurs fondatrices de Kasa. " +
                "Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]} />
                <Dropdown name="Service" list={["La bienveillance fait partie des valeurs fondatrices de Kasa. " +
                "Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]} />
                <Dropdown name="Sécurité" list={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, " +
                "chaque logement correspond aux critères de sécurité établis par nos services. " +
                "En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. " +
                "Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]} />
            </section>
        </div>
    );
};

export default AboutPage;