import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidFaStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type RatingStarsProps = {
  rating: 1 | 2 | 3 | 4 | 5 | null;
};

export default function RatingStars({ rating }: RatingStarsProps) {
  return [...Array(5)].map((_, i) => {
    return i + 1 < (rating ?? 0) ? (
      <FontAwesomeIcon icon={solidFaStar} className='text-von-orange-500' />
    ) : (
      <FontAwesomeIcon icon={faStar} className='text-muted-600' />
    );
  });
}
