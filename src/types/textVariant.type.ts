type TextVariant = "descriptionText" | "centralizedDescriptionText" | "reviewCardText" | "sampleCardText";
export interface TextProps {
  children: React.ReactNode;
  variant: TextVariant;
};