import ShopButton from '@/components/atoms/button/button.atom';
import { DescriptionHeading } from '@/components/atoms/heading/descriptionHeading.atom';
import { Heading } from '@/components/atoms/heading/heading.atom';
import ImageGallery from '@/components/atoms/image/image.atom';
import { TextAtom } from '@/components/atoms/texts/texts.atom';
import { IconRepository } from '@/lib/repository/iconRepository';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-white">
      <Heading variant="mainHeading">Welcome to My Website</Heading>
      <Heading variant="firstSubHeading">First Subheading</Heading>
      <Heading variant="secondSubHeading">Second Subheading</Heading>
      <Heading variant="thirdSubHeading">Third Subheading ....</Heading>
      <Heading variant="faintHeading">Faint Heading....</Heading>
      <Heading variant="cardHeading">Card Heading</Heading>
      <DescriptionHeading icon={<IconRepository.BackwardArrow />}>This is a description heading with an icon.</DescriptionHeading>
      <DescriptionHeading>This is a description heading with an icon.</DescriptionHeading>
        <TextAtom variant="descriptionText">This is a description text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, pariatur inventore! Minus odio quia, vitae praesentium voluptatem vero officia, voluptatum quod odit quo similique cupiditate magnam ullam corporis. Similique, pariatur?</TextAtom>
      <TextAtom variant="centralizedDescriptionText">This is a centralized description text.</TextAtom>
      <TextAtom variant="reviewCardText">This is a review card text. fifsidjds ksjvdv scldih vso;jv</TextAtom>
      <TextAtom variant="sampleCardText">This is a sample card text.</TextAtom>
      <ShopButton>Shop Diamond Glitzz</ShopButton>
      <div className="h-64 w-72">
        <ImageGallery image={"/images/rings/engagement_wedding_mobile_ring.png"} />
      </div>
      
    </div>
  );
}
