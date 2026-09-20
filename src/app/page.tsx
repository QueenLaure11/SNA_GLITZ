import { DescriptionHeading } from '@/components/atoms/heading/descriptionHeading.atom';
import { Heading } from '@/components/atoms/heading/heading.atom';
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
    </div>
  );
}
