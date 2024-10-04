import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Social from "../components/Social";
import PublicationHeader from "../components/about/PublicationHeader";
import BookInfo from "../components/book/BookInfo";
import data from "../data.json";

const Book = ({ currentAuthor }: { currentAuthor: number }) => {
  const currentData = data[currentAuthor];

  return (
    <div className="block h-[100vh] w-full xl:flex 2xl:flex">
      <Logo color={"black"} currentAuthor={currentData.publication.author} />
      <section className="lg-w-3/5 flex h-full w-full flex-col justify-between gap-24 pb-7 pl-7 pr-14 pt-36 text-black md:gap-0 md:pr-20 lg:gap-0 lg:pr-20 lg:pt-24 xl:w-3/5 xl:gap-0 xl:pr-20 xl:pt-24 2xl:w-3/5 2xl:gap-0 2xl:pl-24 2xl:pr-20 2xl:pt-24">
        <BookInfo
          author={currentData.publication.author}
          originalTitle={currentData.publication.original_title}
          language={currentData.publication.original_title}
          publisher={currentData.publication.publisher}
          publicationDate={currentData.publication.publication_date}
          coverBy={currentData.publication.cover_by}
        />
        <div className="flex flex-1 flex-col justify-end">
          <PublicationHeader
            type="big"
            authorName={currentData.publication.author}
            bookTitle={currentData.book_info.title}
            coverAuthorName={currentData.publication.cover_by}
            coverAuthorEmail={currentData.publication.cover_author_email}
          />
          <p
            style={{ fontFamily: '"Poppins", sans-serif' }}
            className="mt-8 text-justify text-lg"
          >
            {currentData.book_info.text}
          </p>
          <hr className="border-1/2 mt-9 border-black" />
        </div>
      </section>
      <section
        className="w-3/6 lg:visible xl:visible 2xl:visible"
        style={{
          background: `url(${currentData.images.bg_y})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Social color={"black"} />
      </section>
    </div>
  );
};

export default Book;
