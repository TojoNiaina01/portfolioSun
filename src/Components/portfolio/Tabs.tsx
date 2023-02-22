import React from "react";
import { Tab } from "@headlessui/react";
import Card from "@/Components/portfolio/Card";
import { PortfolioTab } from "@/Data";
import { v4 } from "uuid";

const Tabs = () => {
  const menus: string[] = [
    "Web & Mobile App",
    "Web & Mobile Design",
    "3D",
    "Desktop",
    "Marketing Digital",
    "Design & Motion Graphic",
  ];
  return (
    <Tab.Group>
      <Tab.List className="flex justify-center">
        <div className="flex gap-6 overflow-x-scroll scrollbar-hide">
          {menus.map((menu) => (
            <Tab key={v4()} className="">
              {({ selected }) => (
                <div
                  className={`${
                    selected ? "border-none bg-primary-500" : "bg-transparent "
                  } whitespace-nowrap rounded-xl border-[1px] border-primary-500 px-5 py-3 font-thin transition duration-300`}
                >
                  {menu}
                </div>
              )}
            </Tab>
          ))}
        </div>
      </Tab.List>
      <Tab.Panels className="overflow-x-scroll scrollbar-hide">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Tab.Panel key={v4()}>
            <div className="flex gap-10 md:justify-center ">
              {PortfolioTab.map((item) => (
                <Card
                  key={v4()}
                  description={item.description}
                  imgPath={item.imgPath}
                  title={item.title}
                />
              ))}
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
