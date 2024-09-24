import React from "react";
import data from "../data.json";
import Logo from "../components/Logo";
import BookInfo from "../components/book/BookInfo";
import PublicationHeader from "../components/about/PublicationHeader";
import Social from "../components/Social";

const Book = ({ currentAuthor }: { currentAuthor: number }) => {
  const currentData = data[currentAuthor];
  return (
    <div className="flex h-[100vh] w-full gap-24">
      <Logo color={"black"} currentAuthor={currentData.publication.author} />
      <section className="flex h-full w-3/5 flex-col justify-between pb-7 pl-7 pt-24 text-black 2xl:pl-24">
        <BookInfo
          author={currentData.publication.author}
          originalTitle={currentData.publication.original_title}
          language={currentData.publication.original_title}
          publisher={currentData.publication.publisher}
          publicationDate={currentData.publication.publication_date}
          coverBy={currentData.publication.cover_by}
        />
        <div>
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
        className="w-3/6"
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
