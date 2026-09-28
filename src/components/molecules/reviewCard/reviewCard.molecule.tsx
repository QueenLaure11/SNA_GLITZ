"use client";
import Image from "next/image";
import { ReviewCardProps } from "@/types/reviewCard.type";
import { TextAtom } from "@/components/atoms/texts/texts.atom";
import { Heading } from "@/components/atoms/heading/heading.atom";

const  ReviewCard =({ name, review, rating }: ReviewCardProps) => {
  return (
    <div className="w-full max-w-full bg-white rounded-xl shadow-md p-6 flex flex-col gap-3">
      <Heading variant="cardHeading">{name}</Heading>
      <TextAtom  variant={"reviewCardText"}>{review}</TextAtom>
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Image
            key={i}
            src="./images/icons/Yellow Star.svg"
            alt="star"
            width={22}
            height={22}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewCard
