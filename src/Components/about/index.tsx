import React from "react";
import { Details, SelectedPage } from "@/Type/TypeConfig";
import Title from "@/Components/Title";
import { BoltIcon } from "@heroicons/react/24/outline";
import DetailsComp from "@/Components/about/DetailsComp";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const details: Array<Details> = [
  {
    icon: <BoltIcon className="h-4 w-4" />,
    title: "Power Performance",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo eget turpis adipiscing venenatis enim tincidunt egestas nec malesuada. Ridiculus ante at eget commodo orci id.",
  },
  {
    icon: <BoltIcon className="h-4 w-4" />,
    title: "Speed",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo eget turpis adipiscing venenatis enim tincidunt egestas nec malesuada. Ridiculus ante at eget commodo orci id.",
  },
  {
    icon: <BoltIcon className="h-4 w-4" />,
    title: "Efficient",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo eget turpis adipiscing venenatis enim tincidunt egestas nec malesuada. Ridiculus ante at eget commodo orci id.",
  },
];

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto h-full min-h-full w-5/6 py-20">
      <div className="">
        {/* HEADERS */}
        <div className="md:my-5">
          <Title>
            About <span className="text-primary-500">Us</span>
          </Title>
          <p className="mx-auto my-5 text-sm font-thin md:w-3/5">
            Lorem ipsum dolor sit amet consectetur. In varius convallis in
            tincidunt tempor at. Tincidunt enim ut amet commodo. Fusce platea
            quam nam posuere tincidunt erat felis ultrices mauris. Cras
            pellentesque massa eget posuere laoreet nunc viverra. Duis malesuada
            placerat non id magna amet erat viverra a. Nisi bibendum sit sed
            commodo ut aliquam augue. Aliquam duis ut dapibus proin orci non
            dui. Integer mattis sit .
          </p>
        </div>

        {/*  DETAILS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {details.map((detail: Details) => (
            <DetailsComp
              key={detail.title}
              icon={detail.icon}
              title={detail.title}
              description={detail.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
