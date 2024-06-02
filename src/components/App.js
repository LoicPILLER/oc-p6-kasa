import Header from "./Header";
import Footer from "./Footer"
import Dropdown from "./Dropdown";

import '../styles/App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Dropdown name="Test" list={['elem1', 'elem2']} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
