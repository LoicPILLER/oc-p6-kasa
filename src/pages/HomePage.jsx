import Dropdown from "../components/Dropdown";

function HomePage() {
    return (
        <div className="home-page">
            <Dropdown name="Test" list={['elem1', 'elem2']} />
        </div>
    );
}

export default HomePage;
