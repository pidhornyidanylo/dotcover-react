import React from "react";
import { Link } from "react-router-dom";

type BookLinkProps = {
  currentAuthor: string;
};

const BookLink: React.FC<BookLinkProps> = ({
  currentAuthor,
}: BookLinkProps) => (
  <Link className="text-2xl italic" to={`/book/${currentAuthor}`}>
    {currentAuthor}
  </Link>
);

export default BookLink;
