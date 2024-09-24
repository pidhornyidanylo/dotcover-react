import React from "react";

type BookInfoProps = {
  author: string;
  originalTitle: string;
  language: string;
  publisher: string;
  publicationDate: number;
  coverBy: string;
};

const BookInfo: React.FC<BookInfoProps> = ({
  author,
  originalTitle,
  language,
  publisher,
  publicationDate,
  coverBy,
}: BookInfoProps) => {
  return (
    <>
      <div className="flex flex-col gap-1 self-end text-xl">
        <div className="flex xl:gap-12">
          <span className="w-[150px] text-gray-700">Author</span>
          <span className="flex-1">{author}</span>
        </div>
        <div className="flex xl:gap-12">
          <span className="w-[150px] text-gray-700">Original Title</span>
          <span className="flex-1">{originalTitle}</span>
        </div>
        <div className="flex xl:gap-12">
          <span className="w-[150px] text-gray-700">Language</span>
          <span className="flex-1">{language}</span>
        </div>
        <div className="flex xl:gap-12">
          <span className="w-[150px] text-gray-700">Publisher</span>
          <span className="flex-1">{publisher}</span>
        </div>
        <div className="flex xl:gap-12">
          <span className="w-[150px] text-gray-700">Publication date</span>
          <span className="flex-1">{publicationDate}</span>
        </div>
        <div className="flex xl:gap-12">
          <span className="w-[150px] text-gray-700">Cover by</span>
          <span className="flex-1">{coverBy}</span>
        </div>
      </div>
    </>
  );
};

export default BookInfo;
