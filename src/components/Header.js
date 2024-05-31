import logo from '../assets/img/logo.svg';

import '../styles/Header.scss';

function Header() {
    return (
        <div className="Header">
            <header>
                <img className="logo" src={logo} alt="Kasa's logo"/>
                <nav>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">A Propos</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;