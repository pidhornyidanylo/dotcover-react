import React from "react";
import PublicationHeader from "./PublicationHeader";
import data from "../../data.json";

const AboutContent = ({
  currentAuthor,
  setCurrentAuthor,
}: {
  currentAuthor: number;
  setCurrentAuthor: () => void;
}) => {
  const nextAuthor =
    currentAuthor + 1 < data.length
      ? "0" +
        (currentAuthor + 1 + 1) +
        ". " +
        data[currentAuthor + 1].publication.author
      : "End of list";
  return (
    <>
      <div className="w-full 2xl:w-1/2">
        <PublicationHeader
          authorName={data[currentAuthor].publication.author}
          bookTitle={data[currentAuthor].book_info.title}
          coverAuthorName={data[currentAuthor].publication.cover_by}
          coverAuthorEmail={data[currentAuthor].publication.cover_author_email}
        />
        <div
          className="flex flex-col"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <div className="text-md flex flex-col gap-1 xl:text-lg 2xl:text-xl">
            <div className="flex gap-0 lg:gap-5 xl:gap-12 2xl:gap-24">
              <span className="w-[140px] text-gray-500">Art Direction</span>
              <span className="flex-1">
                {data[currentAuthor].publication.art_direction}
              </span>
            </div>
            <div className="flex xl:gap-12 2xl:gap-24">
              <span className="w-[140px] text-gray-500">Influenced By</span>
              <span className="flex-1">
                {data[currentAuthor].publication.influenced_by}
              </span>
            </div>
            <div className="flex xl:gap-12 2xl:gap-24">
              <span className="w-[140px] text-gray-500">Year</span>
              <span className="flex-1">
                {data[currentAuthor].publication.year}
              </span>
            </div>
          </div>
          <p className="text-md mt-8 text-justify">
            {data[currentAuthor].book_info.text}
          </p>
          <div className="flex gap-14">
            <div className="relative flex-1 border-b-1 border-black">
              <span className="absolute -right-0.5 top-[20px] h-0.25 w-4 rotate-30 bg-black"></span>
              <span className="absolute -right-0.5 top-[28px] h-0.25 w-4 -rotate-30 bg-black"></span>
            </div>
            <span
              onClick={() =>
                currentAuthor + 1 < data.length ? setCurrentAuthor() : ""
              }
              className="cursor-pointer border-b-1 border-black font-bold"
            >
              {nextAuthor}
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center justify-around gap-12 2xl:w-1/2">
        <img
          src={data[currentAuthor].images.first_prewiev}
          width="256px"
          height="350px"
          alt="first-preview"
        />
        <img
          className="mt-0 md:mt-40 lg:mt-40 xl:mt-40 2xl:mt-40"
          src={data[currentAuthor].images.second_prewiev}
          width="256px"
          height="350px"
          alt="second-preview"
        />
        <img
          className="mt-0 scale-100 md:mt-12 lg:mt-12 xl:mt-12 2xl:mt-12 2xl:scale-90"
          src={data[currentAuthor].images.third_prewiev}
          width="256px"
          height="350px"
          alt="third-preview"
        />
      </div>
    </>
  );
};

export default AboutContent;
