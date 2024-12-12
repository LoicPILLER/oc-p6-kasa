import { Link } from "react-router-dom";
import {Helmet} from "react-helmet-async";
import '../styles/NotFoundPage.scss';

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <Helmet>
                <title>Erreur 404 - Kasa</title>
            </Helmet>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default NotFoundPage;
