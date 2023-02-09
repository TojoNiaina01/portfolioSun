import React, { useState, useEffect } from "react";
import { SelectedPage } from "@/Type/TypeConfig";
import Navbar from "@/Components/navbar";
import Home from "@/Components/home";
import About from "@/Components/about";
import Portfolio from "@/Components/portfolio";

export default function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopPage, setIsTopPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopPage={isTopPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Portfolio setSelectedPage={setSelectedPage} />
    </div>
  );
}
