import React from "react";

type Props = {
  icons: React.ReactNode;
  title: string;
  description: string;
};
const Services = ({ icons, title, description }: Props) => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center rounded-xl border-[1px] border-[#F58A3A] bg-[#181D27] p-3">
        <div className="my-2 rounded-full bg-[#F58A3A] p-3">{icons}</div>
        <h3 className="py-2 text-sm font-semibold">{title}</h3>
        <p className="text-center text-xs font-thin tracking-wide">
          {description}
        </p>
        <button className="pt-2 text-sm">{"Learn More >"}</button>
      </div>
    </div>
  );
};

export default Services;
