-- Create Database --

-- Create books table --
CREATE TABLE books(
	id SERIAL PRIMARY KEY,
	title VARCHAR(25),
	author VARCHAR(25),
	date DATE,
	note TEXT,
	rating INTEGER,
	olid VARCHAR(15) UNIQUE,
);

-- Populate with book data --
INSERT INTO books(title, author, date, note, rating, olid)
VALUES("", "", "YYYY-MM-DD", "", 0, "")
