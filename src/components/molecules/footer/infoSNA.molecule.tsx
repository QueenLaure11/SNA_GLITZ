import { Heading } from "@/components/atoms/heading/heading.atom";
import { TextAtom } from "@/components/atoms/texts/texts.atom";
import { InfoSNAProps } from "@/types/infoSNA.type";
import Image from "next/image";

const infoSNAMolecule = ({ handleSubscribe }: InfoSNAProps) => {
  return (
    <div className="px-80 py-4 bg-white flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2.5">
          <Heading variant="faintHeading">Customer Care</Heading>
          <div className="flex flex-col gap-1.5">
            <TextAtom variant="descriptionText">Contact Us</TextAtom>
            <TextAtom variant="descriptionText">
              Call Now: 0123 456 7891
            </TextAtom>
            <TextAtom variant="descriptionText">Frequently Asked</TextAtom>
            <TextAtom variant="descriptionText">Questions</TextAtom>
            <TextAtom variant="descriptionText">Shipping & Returns</TextAtom>
            <TextAtom variant="descriptionText">Catalogues</TextAtom>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <Heading variant="faintHeading">Our Company</Heading>
          <TextAtom variant="descriptionText">SNA GLITZZ</TextAtom>
        </div>
        <div className="flex gap-10">
          <div className="w-48 flex flex-col gap-2.5">
            <Heading variant="faintHeading">Latest from Us</Heading>
            <p className="text-gray-600 font-['Montserrat'] font-medium text-xs leading-4">
              Be the first to know about exciting new designs, special events,
              store openings and much more
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="border-b border-red-500 pb-2 pt-6  w-64">
              <TextAtom variant="descriptionText">Email</TextAtom>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSubscribe}
                className="border border-red-600 text-red-500 px-5 py-1 rounded-4xl font-montserrat text-[12px] hover:bg-red-500 hover:text-white transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-16">
        <Image
          src="/images/icons/Instagram.svg"
          alt="Instagram Icon"
          width={24}
          height={24}
        />
        <Image
          src="/images/icons/Facebook.svg"
          alt="Facebook Icon"
          width={16}
          height={16}
        />
        <Image
          src="/images/icons/Pinterest.svg"
          alt="Pinterest Icon"
          width={24}
          height={24}
        />
        <Image
          src="/images/icons/Twitter.svg"
          alt="Twitter Icon"
          width={24}
          height={24}
        />
        <Image
          src="/images/icons/YouTube.svg"
          alt="YouTube Icon"
          width={24}
          height={24}
        />
      </div>
      <div className="flex flex-col items-center mt-5 gap-10">
        <Heading variant="firstSubHeading">SNA GLITZZ</Heading>
        <div className="flex flex-col gap-2.5 ">
          <div className="flex items-center justify-center gap-0.5">
            <Image
              src="/images/icons/Copyright.svg"
              alt="Copyright Icon"
              width={14}
              height={14}
            />
            <TextAtom variant="descriptionText">
              2023 SNA GLITZZ. All rights reserved
            </TextAtom>
          </div>
          <div className="flex gap-4">
            <TextAtom variant="descriptionText">Terms & Conditions</TextAtom>
            <TextAtom variant="descriptionText">Cookie Settings</TextAtom>
            <TextAtom variant="descriptionText">Cookie Policy</TextAtom>
            <TextAtom variant="descriptionText">Privacy Policy</TextAtom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default infoSNAMolecule;
