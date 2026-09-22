import { ImageGalleryProps } from "@/types/image.type";
import Image from "next/image";

const ImageGallery = ({ image }: ImageGalleryProps) => {
  return (
   <div
          className="relative w-full aspect-square overflow-hidden rounded-2xl"
        >
          <Image
            src={image}
            alt={"Gallery Image"}
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            className="object-cover"
          />
        </div>
  );
};

export default ImageGallery;