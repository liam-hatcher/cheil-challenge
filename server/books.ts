import express from "express";
import data from "./db";

// return an array of values instead of an object because
// it's easier to work with on the front end.
const allBooks = Object.values(data);

const router = express.Router();

router.get("/", function (_, res) {
  res.json(allBooks);
});

router.get("/latest", (_, res) => {
  const sorted = allBooks.sort(
    (a, b) =>
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
  );

  res.json(sorted.slice(0, 3));
});

router.get("/expiring_soon", (_, res) => {
  const sorted = allBooks
    .sort(
      (a, b) =>
        new Date(a.offsale_date).getTime() - new Date(b.offsale_date).getTime()
    )
    .filter(
      // remove expired books
      (book) => new Date(book.offsale_date).getTime() > new Date().getTime()
    );
  res.json(sorted.slice(0, 3));
});

export default router;
