import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

// Uncomment the following lines and add the appropriate values to run project using a database (PostgreSQL)
// const db = new pg.Client({
//   user: "",
//   host: "",
//   database: "",
//   password: "",
//   port: 5432
// });

// db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let books = [
  { 
    id: 1,
    title: "Fear And Loathing In Las Vegas",
    author: "Hunter S. Thompson",
    date: new Date("2007-07-01").getFullYear(),
    note: "What a great book!",
    rating: 9,
    olid: "OL4896974M"
  },
  {
    id: 2,
    title: "The Wind In The Willows",
    author: "Kenneth Grahame",
    date: new Date("1990-02-01").getFullYear(),
    note: "One of the first books I ever read and an all-time favorite.",
    rating: 8,
    olid: "OL40346470M"
  }
];

app.get("/", (req, res) => {
  res.render("index.ejs", { books });
});

app.get("/:id", (req, res) => {
  const id = req.params.id - 1;
  res.render("book.ejs", { book: books[id] })
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
