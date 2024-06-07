import Icon from "./Icon";

import '../styles/Header.scss';

function Header() {
    return (
        <header>
            <Icon color="#FF6060" />
            <nav>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">A Propos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;