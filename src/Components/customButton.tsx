import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/Type/TypeConfig";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};
const CustomButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-primary-500 px-10 py-2 hover:bg-primary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default CustomButton;
