import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/img/Logo.png";
import { SelectedPage } from "@/Type/TypeConfig";
import useMediaQuery from "@/hook/useMediaQuery";
import Link from "@/Components/navbar/Link";
import CustomButton from "@/Components/customButton";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { Point } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  isTopPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, isTopPage, setSelectedPage }: Props) => {
  const mediaLimit = useMediaQuery("(min-width:1060px)");
  const navStyle = isTopPage ? "py-6" : "py-3 bg-[#0E1623]/90";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeMenu = (e: any) => {
      const btn = btnRef.current;
      if (!btn?.contains(e.target)) setIsMenuToggled(false);
    };
    document.body.addEventListener("click", closeMenu);

    return () => document.body.removeEventListener("click", closeMenu);
  }, []);
  return (
    <nav>
      <div
        className={`${navStyle} fixed top-0 z-30 flex w-full items-center justify-between transition duration-300 ease-out`}
      >
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-16">
            {/* Left Side NavBar */}
            <img src={Logo} alt="logo" className="h-14 w-14 object-contain" />

            {/* Right Side NavBar */}
            {mediaLimit ? (
              <>
                <div className="text-[#D2D2D2 flex items-center justify-between gap-14 text-sm tracking-wider">
                  <Link
                    page="Home"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                  />
                  <Link
                    page="About"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                  />
                  <Link
                    page="Portfolio"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                  />
                  <Link
                    page="Services"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                  />
                  <Link
                    page="Works"
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                  />
                </div>

                {/* Contact btn */}
                <CustomButton setSelectedPage={setSelectedPage}>
                  Contact-Us
                </CustomButton>
              </>
            ) : (
              <button
                className="rounded-md bg-primary-500 p-2 md:p-1"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                ref={btnRef}
              >
                <ChevronDoubleDownIcon className="h-8 md:h-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal menu mobile */}
      {!mediaLimit && isMenuToggled && (
        <div className="fixed top-24 right-8 z-40 w-[250px] rounded-lg bg-[#0E1623]">
          <div className="flex flex-col items-center gap-8  p-10">
            <Link
              page="Home"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
            <Link
              page="About"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
            <Link
              page="Portfolio"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
            <Link
              page="Services"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
            <Link
              page="Works"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
            <CustomButton setSelectedPage={setSelectedPage}>
              Contact-Us
            </CustomButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
