import {Helmet} from "react-helmet-async";
import Dropdown from "../components/Dropdown";

const AboutPage = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>A propos - Kasa</title>
            </Helmet>
            <Dropdown name="Fiabilité" list={[""]} />
            <Dropdown name="Respect" list={[""]} />
            <Dropdown name="Service" list={[""]} />
            <Dropdown name="Sécurité" list={[""]} />
        </div>
    );
};

export default AboutPage;