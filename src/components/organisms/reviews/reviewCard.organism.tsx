import ReviewCard from "@/components/molecules/reviewCard/reviewCard.molecule";
import { ReviewListProps } from "@/types/reviewCard.type";



const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-20 gap-5 w-full">
      {reviews.map((item, index) => (
        <ReviewCard
          key={index}
          name={item.name}
          review={item.review}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default ReviewList
