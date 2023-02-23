import React from "react";

type Props = {
  title: string;
  description: string;
};
const Proposal = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      <h3 className="text-lg font-semibold uppercase">{title}</h3>
      <p className="text-center font-thin ">{description}</p>
      <button className=" rounded-md bg-[#F58A3A] py-2 px-4">
        Talk About !
      </button>
    </div>
  );
};

export default Proposal;
