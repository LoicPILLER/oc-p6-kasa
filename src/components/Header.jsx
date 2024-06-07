import Icon from "./Icon";

import '../styles/Header.scss';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
            <Icon color="#FF6060" />
            <nav>
                <ul>
                    <li><NavLink to='/'>Accueil</NavLink></li>
                    <li><NavLink to='/about'>A propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;