import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutContent from "./AboutContent";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("AboutContent component", () => {
  it("renders images", () => {
    render(
      <BrowserRouter>
        <AboutContent currentAuthor={0} setCurrentAuthor={() => {}} />
      </BrowserRouter>,
    );
    const imageOne = screen.getByRole("img", {
      name: /first\-preview/i,
    });
    const imageTwo = screen.getByRole("img", {
      name: /second\-preview/i,
    });
    const imageThree = screen.getByRole("img", {
      name: /third\-preview/i,
    });
    expect(imageOne).toBeInTheDocument();
    expect(imageTwo).toBeInTheDocument();
    expect(imageThree).toBeInTheDocument();
  });
});
