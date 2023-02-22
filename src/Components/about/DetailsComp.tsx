import React from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};
const DetailsComp = ({ icon, title, description }: Props) => {
  return (
    <div className="mt-5 min-w-[250px] rounded-md border-2 border-primary-100 px-5 py-10 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-primary-500 bg-primary-500 p-4">
          {icon}
        </div>
      </div>
      <h4 className="text-xl font-bold"> {title} </h4>
      <p className="my-3 text-sm font-thin tracking-wide">{description}</p>
    </div>
  );
};

export default DetailsComp;
