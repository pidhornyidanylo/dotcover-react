import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookLink from "./BookLink";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("BookLink component", () => {
  it("renders proper name", () => {
    render(
      <BrowserRouter>
        <BookLink currentAuthor="Franz Kafka" />
      </BrowserRouter>,
    );
    const properName = screen.getByText(/franz kafka/i);
    expect(properName).toBeInTheDocument()
  });
});
