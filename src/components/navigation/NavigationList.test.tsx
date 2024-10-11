import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationList from "./NavigationList";
import React from "react";

describe("NavigationList component", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("renders author index properly", () => {
    render(
      <BrowserRouter>
        <NavigationList currentAuthor={0} setCurrentAuthor={() => {}} />
      </BrowserRouter>,
    );
    const authorIndex = screen.getByText(/01\./i);
    expect(authorIndex).toBeInTheDocument();
  });
  it("current author has opacity 100%", () => {
    render(
      <BrowserRouter>
        <NavigationList currentAuthor={0} setCurrentAuthor={() => {}} />
      </BrowserRouter>,
    );
    const authorIndex = screen.getByText(/01\./i);
    expect(authorIndex.parentElement).toHaveClass("opacity-100");
  });
  it("next/prev authors have opacity 70%", () => {
    render(
      <BrowserRouter>
        <NavigationList currentAuthor={0} setCurrentAuthor={() => {}} />
      </BrowserRouter>,
    );
    const nextAuthorIndex = screen.getByText(/02\./i);
    const prevAuthorIndex = screen.getByText(/04\./i);
    expect(nextAuthorIndex.parentElement).toHaveClass("opacity-70");
    expect(prevAuthorIndex.parentElement).toHaveClass("opacity-70");
  });

  it("localStorage updates data on click", () => {
    const setCurrentAuthor = jest.fn((index: number) => {
      localStorage.setItem("currentAuthor", index.toString());
    });

    render(
      <BrowserRouter>
        <NavigationList currentAuthor={0} setCurrentAuthor={setCurrentAuthor} />
      </BrowserRouter>,
    );

    const nextAuthorIndex = screen.getByText(/02\./i).parentElement;
    fireEvent.click(nextAuthorIndex as Element);

    expect(localStorage.getItem("currentAuthor")).toBe("1");
  });
});
