import React from "react";


type PublicationHeaderProps = {
    authorName: string;
    bookTitle: string;
    coverAuthorName: string;
    coverAuthorEmail: string;
}

const PublicationHeader = ({ authorName, bookTitle, coverAuthorName, coverAuthorEmail }: PublicationHeaderProps) => {
  return (
    <>
      <h4
        className="mb-4 text-xl text-gray-500"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {authorName}
      </h4>
      <h2
        className="mb-10 text-4xl font-bold"
        style={{ fontFamily: '"Libre Caslon Text", sans-serif' }}
      >
        {bookTitle}
      </h2>
      <div className="mb-8 flex items-center gap-6 lg:mb-20 xl:mb-20 2xl:mb-20">
        <img
          src={"assets/icons/Man.png"}
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
