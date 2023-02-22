import { motion } from "framer-motion";
import React, { useState } from "react";
import { set } from "react-hook-form";

type Props = {
  title: string;
  description: string;
  imgPath: string;
};

const Card = ({ title, description, imgPath }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      className="relative mt-4 min-w-[250px]  overflow-hidden rounded-md hover:cursor-pointer md:min-w-[320px]"
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      <div className="h-[320px] w-[320px]">
        <img
          src={imgPath}
          alt="project graphic"
          className="h-full w-full rounded-md object-cover"
        />
        <div
          className={`${
            hovered ? "opacity-1" : "opacity-0"
          } absolute top-0 flex h-full flex-col justify-center bg-[#F58A3A]/75 p-6 text-center transition-all duration-300 ease-in`}
        >
          <h2 className="p-4 text-xl font-semibold">{title}</h2>
          <p className="text-xs font-thin">{description}</p>
          <button className="mx-auto mt-4 w-fit rounded-md bg-white px-4 py-2 font-semibold text-[#F58A3A]">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
