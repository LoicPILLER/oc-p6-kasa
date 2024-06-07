import Dropdown from "../components/Dropdown";
import {Helmet} from "react-helmet-async";

function HomePage() {
    return (
        <div className="home-page">
            <Helmet>
                <title>Accueil - Kasa</title>
            </Helmet>
            <Dropdown name="Test" list={['elem1', 'elem2']} />
        </div>
    );
}

export default HomePage;
