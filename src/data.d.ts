export type Book = {
  publication: {
    author: string;
    original_title: string;
    language: string;
    publisher: string;
    publication_date: number;
    cover_by: string;
    cover_author_email: string;
    art_direction: string;
    influenced_by: string;
    year: number;
  };
  book_info: {
    title: string;
    text: string;
  };
  images: {
    bg: string;
    bg_y: string;
    first_prewiev: string;
    second_prewiev: string;
    third_prewiev: string;
  };
};

export type Books = Book[];
