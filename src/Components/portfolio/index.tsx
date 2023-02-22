import React from "react";
import { SelectedPage } from "@/Type/TypeConfig";
import Title from "@/Components/Title";
import { Tab } from "@headlessui/react";
import Tabs from "@/Components/portfolio/Tabs";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Portfolio = ({ setSelectedPage }: Props) => {
  return (
    <section id="portfolio" className="mx-auto h-full w-5/6 py-14">
      <div className="">
        {/* HEADERS */}
        <div className="md:my-5">
          <Title>Portfolio</Title>
          <p className="mx-auto my-5 text-sm font-thin md:w-3/5">
            Lorem ipsum dolor sit amet consectetur. In varius convallis in
            tincidunt tempor at. Tincidunt enim ut amet commodo. Fusce platea
            quam nam posuere tincidunt erat felis
          </p>
        </div>
        <div className="">
          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
