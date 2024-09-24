import clsx from "clsx";
import React from "react";

type PublicationHeaderProps = {
  type?: "big";
  authorName: string;
  bookTitle: string;
  coverAuthorName: string;
  coverAuthorEmail: string;
};

const PublicationHeader = ({
  authorName,
  bookTitle,
  coverAuthorName,
  coverAuthorEmail,
  type,
}: PublicationHeaderProps) => {
  return (
    <>
      <h4
        className="mb-4 text-xl text-gray-500"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {authorName}
      </h4>
      <h2
        className={clsx("mb-10 font-bold", {
          "text-4xl": !type,
          "text-7xl": type === "big",
        })}
        style={{ fontFamily: '"Libre Caslon Text", sans-serif' }}
      >
        {bookTitle}
      </h2>
      <div
        className={clsx("flex items-center gap-6", {
          "mb-8 lg:mb-20 xl:mb-20 2xl:mb-20": !type,
          "lg:mb-30 xl:mb-30 2xl:mb-30 mb-28": type === "big",
        })}
      >
        <img
          src={"/assets/icons/Man.png"}
          width="40px"
          height="40px"
          alt="avatar"
        />
        <div style={{ fontFamily: '"Poppins", sans-serif' }}>
          <p>{coverAuthorName}</p>
          <p>{coverAuthorEmail}</p>
        </div>
      </div>
    </>
  );
};

export default PublicationHeader;
