import express from "express";
import cors from "cors";
import books from "./books";

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

app.use("/books", books);

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`\nListening for requests on port ${PORT}\n`)
);
