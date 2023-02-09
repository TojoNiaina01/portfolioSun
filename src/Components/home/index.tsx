import React from "react";
import { SelectedPage } from "@/Type/TypeConfig";
import CustomButton from "@/Components/customButton";
import LandingImage from "@/assets/img/mascot.png";
import Messenger from "@/assets/svg/messenger.svg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0">
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Text */}
          <div className=" -mt-14 md:-mt-20">
            <h2 className="font-montserrat text-3xl tracking-wider">
              Web Design &{" "}
              <span className="text-primary-300">
                Digital <br /> Marketing
              </span>{" "}
              Agency
            </h2>
            <p className="mt-8 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
              commodo nunc, habitant nisl lectus mauris pellentesque donec. Eget
              luctus iaculis mattis facilisis adipiscing rhoncus, mi. Bibendum
              habitasse
            </p>
          </div>
          {/*  BTN */}
          <div className="mt-8">
            <CustomButton setSelectedPage={setSelectedPage}>
              Apropos
            </CustomButton>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-56 left-64 hidden md:block ">
            <div className="flex items-center gap-4 rounded-xl bg-white px-4 py-2 shadow">
              <img src={Messenger} alt="Messenger logo" className="h-8 w-8" />
              <div className="text-sm">
                <p className="font-thin tracking-wider text-gray-500">
                  {" "}
                  Congratulation !
                </p>
                <h3 className="tracking-wide text-gray-700">
                  You are amazing, great work !
                </h3>
              </div>
            </div>
          </div>
          <div className="flex basis-3/5 justify-center md:z-10 md:mr-[200px] md:mt-44 md:justify-items-end">
            <img
              src={LandingImage}
              alt="Home-page-mascot"
              className="h-[570px] w-[490px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
