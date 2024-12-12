import { Star } from 'lucide-react';
import '../styles/Rating.scss';

const Rating = ({ rating }) => {
    const maxStars = 5;

    return (
        <div className="rating-container">
            {Array.from({ length: maxStars }, (_, index) => (
                <Star
                    key={index}
                    className={index < rating ? 'star-filled' : 'star-empty'}
                    size={window.innerWidth > 600 ? 24 : 18}
                />
            ))}
        </div>
    );
};

export default Rating;
