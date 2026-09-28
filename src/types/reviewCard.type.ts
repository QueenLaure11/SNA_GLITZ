export interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
}

export interface ReviewListProps {
  reviews: ReviewCardProps[];
}