import clsx from "clsx";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AboutContent from "../components/about/AboutContent";
import Carousel from "../components/hero/Carousel";
import Logo from "../components/Logo";
import Social from "../components/Social";
import NavigationSlider from "../components/navigation/NavigationSlider";
import NaviationList from "../components/navigation/NaviationList";
import data from "../data.json";

const Home: React.FC = () => {
  const [currentAuthor, setCurrentAuthor] = useState(0);
  const [scrolledOut, setScrolledOut] = useState(false);
  const [showListedNaviation, setShowListedNaviation] = useState(false);

  useEffect(() => {
    const handleWindowDynamics = () => {
      setScrolledOut(window.scrollY > window.innerHeight / 2);
      setShowListedNaviation(window.innerWidth < 639);
    };

    handleWindowDynamics();
    window.addEventListener("scroll", handleWindowDynamics);
    window.addEventListener("resize", handleWindowDynamics);

    return () => {
      window.removeEventListener("resize", handleWindowDynamics);
      window.removeEventListener("scroll", handleWindowDynamics);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") {
      if (currentAuthor + 1 > data.length - 1) {
        setCurrentAuthor(0);
        return;
      }
      setCurrentAuthor((prev) => prev + 1);
    }
    if (e.key === "ArrowLeft") {
      if (currentAuthor < 1) {
        setCurrentAuthor(data.length - 1);
        return;
      }
      setCurrentAuthor((prev) => prev - 1);
    }
  };

  return (
    <>
      <section tabIndex={0} onKeyDown={handleKeyDown} id="hero">
        <div
          className={clsx(
            "absolute z-20 min-h-[100vh] w-[100vw] transition-all",
            {
              "bg-black opacity-50": scrolledOut,
              "z-0 opacity-0": !scrolledOut,
            },
          )}
        />
        <Logo color={"white"} />
        <Carousel currentAuthor={currentAuthor} />
        {showListedNaviation ? (
          <NaviationList
            currentAuthor={currentAuthor}
            setCurrentAuthor={setCurrentAuthor}
          />
        ) : (
          <NavigationSlider
            currentAuthor={currentAuthor}
            setCurrentAuthor={setCurrentAuthor}
          />
        )}
        <Social color={"white"} />
      </section>
      <section
        id="about"
        className={clsx(
          "m-w-[100%] m-0 flex min-h-[580px] flex-col justify-between gap-16 overflow-hidden pb-12 pl-7 pr-7 pt-12 transition-all 2xl:flex-row 2xl:gap-8 2xl:pl-24",
          {
            "opacity-100": scrolledOut,
            "opacity-0": !scrolledOut,
          },
        )}
      >
        <AboutContent
          setCurrentAuthor={() => setCurrentAuthor((prev) => prev + 1)}
          currentAuthor={currentAuthor}
        />
      </section>
    </>
  );
};

export default Home;
