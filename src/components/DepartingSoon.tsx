import React from "react";
import axios from "axios";
import Book from "./Book";
import Section from "./Section";
import { BookData } from "./types";

function DepartingSoon() {
  const [data, setData] = React.useState<BookData[]>([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/books/expiring_soon").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Section title="Departing Soon">
      {data.map((book, i) => (
        <Book
          key={i}
          title={book.title}
          description={book.tagline}
          imagePath={`..${book.img_url}`}
          rating={book.rating}
          isbn={book.isbn}
        />
      ))}
    </Section>
  );
}

export default DepartingSoon;
