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
  const InfoBoxItemStyles = "flex 2xl:gap-12 xl:gap-12 lg:gap-12 gap-4";
  const InfoBoxItemTitleStyles =
    "2xl:w-[150px] xl:w-[150px] lg:w-[150px] md:w-[150px] w-[140px] text-gray-700 2xl:text-xl xl:text-xl lg:text-xl text-sm";
  const InfoBoxItemValueStyles =
    "flex-1 2xl:text-xl xl:text-xl lg:text-xl text-sm";
  return (
    <>
      <div className="flex flex-col gap-1 self-end text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
        <div className={InfoBoxItemStyles}>
          <span className={InfoBoxItemTitleStyles}>Author</span>
          <span className={InfoBoxItemValueStyles}>{author}</span>
        </div>
        <div className={InfoBoxItemStyles}>
          <span className={InfoBoxItemTitleStyles}>Original Title</span>
          <span className={InfoBoxItemValueStyles}>{originalTitle}</span>
        </div>
        <div className={InfoBoxItemStyles}>
          <span className={InfoBoxItemTitleStyles}>Language</span>
          <span className={InfoBoxItemValueStyles}>{language}</span>
        </div>
        <div className={InfoBoxItemStyles}>
          <span className={InfoBoxItemTitleStyles}>Publisher</span>
          <span className={InfoBoxItemValueStyles}>{publisher}</span>
        </div>
        <div className={InfoBoxItemStyles}>
          <span className={InfoBoxItemTitleStyles}>Publication date</span>
          <span className={InfoBoxItemValueStyles}>{publicationDate}</span>
        </div>
        <div className={InfoBoxItemStyles}>
          <span className={InfoBoxItemTitleStyles}>Cover by</span>
          <span className={InfoBoxItemValueStyles}>{coverBy}</span>
        </div>
      </div>
    </>
  );
};

export default BookInfo;
