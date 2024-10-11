import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Home page", () => {
  it("renders hero section", () => {
    render(
      <BrowserRouter>
        <Home currentAuthor={0} setCurrentAuthor={() => {}} />
      </BrowserRouter>,
    );
    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toBeInTheDocument();
  });
  it("renders about section", () => {
    render(
      <BrowserRouter>
        <Home currentAuthor={0} setCurrentAuthor={() => {}} />
      </BrowserRouter>,
    );
    const aboutSection = screen.getByTestId("about-section");
    expect(aboutSection).toBeInTheDocument();
  });
});
