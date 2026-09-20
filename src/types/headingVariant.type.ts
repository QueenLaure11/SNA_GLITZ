type HeadingVariant = "mainHeading" | "firstSubHeading" | "secondSubHeading" | "thirdSubHeading" | "faintHeading" | "cardHeading";
export interface HeadingProps {
  children: React.ReactNode;
  variant: HeadingVariant;
};
export interface DescriptionHeadingProps {
   children: React.ReactNode;
  icon?: React.ReactNode;
};