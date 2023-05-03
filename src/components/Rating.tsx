import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface RatingProps {
  rating: string;
}

function Rating({ rating }: RatingProps) {
  const fullStars = parseInt(rating);
  return (
    <div className="flex">
      {[...Array(fullStars).keys()].map((_, i) => (
        <FaStar className="text-sky-500" key={i} />
      ))}
      {parseFloat(rating) > fullStars ? (
        <FaStarHalfAlt className="text-sky-500" />
      ) : null}
    </div>
  );
}

export default Rating;
