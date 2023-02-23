import React from "react";
import Title from "@/Components/Title";
import { SelectedPage } from "@/Type/TypeConfig";
import Service from "@/Components/services/Service";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import Proposal from "@/Components/services/Proposal";
import Graphic from "@/assets/svg/graphic.svg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="mx-auto h-full w-5/6 py-16">
      <div>
        <div className="md:my-5">
          <Title>SERVICES</Title>
          <p className="mx-auto my-5 text-sm font-thin md:w-3/5">
            Lorem ipsum dolor sit amet consectetur. In varius convallis in
            tincidunt tempor at. Tincidunt enim ut amet commodo. Fusce platea
            quam nam posuere tincidunt erat felis
          </p>
        </div>
        <div className="flex">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:basis-4/6 lg:grid-cols-3">
            <Service
              title="GRAPHIC DESIGN"
              description="Lorem ipsum dolor sit amet consectetur. Sit felis aenean maecenas tristique in sit egestas turpis. Rutrum et faucibus enim tincidunt orci arcu."
              icons={<Square3Stack3DIcon className="h-6 w-6" />}
            />
            <Service
              title="GRAPHIC DESIGN"
              description="Lorem ipsum dolor sit amet consectetur. Sit felis aenean maecenas tristique in sit egestas turpis. Rutrum et faucibus enim tincidunt orci arcu."
              icons={<Square3Stack3DIcon className="h-6 w-6" />}
            />
            <Service
              title="GRAPHIC DESIGN"
              description="Lorem ipsum dolor sit amet consectetur. Sit felis aenean maecenas tristique in sit egestas turpis. Rutrum et faucibus enim tincidunt orci arcu."
              icons={<Square3Stack3DIcon className="h-6 w-6" />}
            />

            <Proposal
              title="Proposal"
              description="Lorem ipsum dolor sit amet consectetur. In varius convallis in tincidunt tempor at. Tincidunt enim ut amet commodo."
            />

            <Service
              title="GRAPHIC DESIGN"
              description="Lorem ipsum dolor sit amet consectetur. Sit felis aenean maecenas tristique in sit egestas turpis. Rutrum et faucibus enim tincidunt orci arcu."
              icons={<Square3Stack3DIcon className="h-6 w-6" />}
            />
            <Service
              title="GRAPHIC DESIGN"
              description="Lorem ipsum dolor sit amet consectetur. Sit felis aenean maecenas tristique in sit egestas turpis. Rutrum et faucibus enim tincidunt orci arcu."
              icons={<Square3Stack3DIcon className="h-6 w-6" />}
            />
          </div>
          <div className="hidden basis-2/6 flex-col items-center justify-center md:flex">
            <div className="text-[#F58A3A]">
              <h3 className="font-montserrat text-3xl font-bold uppercase">
                design
              </h3>
              <p className="text-thin text-sm uppercase">web & mobil</p>
            </div>
            <div>
              <img src={Graphic} alt="Graphic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
