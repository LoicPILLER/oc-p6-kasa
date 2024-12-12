import { Link } from 'react-router-dom';
import '../styles/AccommmodationPreview.scss'

function AccommodationPreview({ id, title, cover }) {
    return (
        <div className="accommodation-preview" key={id}>
            <Link to={`/accommodation/${id}`}>
                <img src={cover} alt={`${title} preview`} />
                <h2>{title}</h2>
            </Link>
        </div>
    );
}

export default AccommodationPreview;