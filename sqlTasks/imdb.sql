CREATE DATABASE imdb;
USE imdb;

-- Table: Genre
CREATE TABLE Genre (
  genreID INT PRIMARY KEY AUTO_INCREMENT,
  genreName VARCHAR(50) NOT NULL
);

-- Table: Movie
CREATE TABLE Movie (
  movieID INT PRIMARY KEY AUTO_INCREMENT,
  movieTitle VARCHAR(100) NOT NULL,
  releaseYear INT,
  plotSummary TEXT,
  duration INT,
  director VARCHAR(100),
  boxOfficeRevenue DECIMAL(10,2),
  imdbRating DECIMAL(3,1)
);

-- Table: Media
CREATE TABLE Media (
  mediaID INT PRIMARY KEY AUTO_INCREMENT,
  movieID INT NOT NULL,
  mediaType ENUM('Video', 'Image') NOT NULL,
  mediaURL VARCHAR(255) NOT NULL,
  FOREIGN KEY (movieID) REFERENCES Movie(movieID) ON DELETE CASCADE
);

-- Table: Review
CREATE TABLE Review (
  reviewID INT PRIMARY KEY AUTO_INCREMENT,
  movieID INT NOT NULL,
  userID INT NOT NULL,
  rating DECIMAL(2,1),
  reviewText TEXT,
  FOREIGN KEY (movieID) REFERENCES Movie(movieID) ON DELETE CASCADE,
  FOREIGN KEY (userID) REFERENCES User(userID) ON DELETE CASCADE
);

-- Table: User
CREATE TABLE User (
  userID INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL
);

-- Table: Artist
CREATE TABLE Artist (
  artistID INT PRIMARY KEY AUTO_INCREMENT,
  artistName VARCHAR(100) NOT NULL
);

-- Table: ArtistSkill
CREATE TABLE ArtistSkill (
  artistID INT NOT NULL,
  skill VARCHAR(50) NOT NULL,
  PRIMARY KEY (artistID, skill),
  FOREIGN KEY (artistID) REFERENCES Artist(artistID) ON DELETE CASCADE
);

-- Table: FilmRole
CREATE TABLE FilmRole (
  movieID INT NOT NULL,
  artistID INT NOT NULL,
  role VARCHAR(50) NOT NULL,
  PRIMARY KEY (movieID, artistID, role),
  FOREIGN KEY (movieID) REFERENCES Movie(movieID) ON DELETE CASCADE,
  FOREIGN KEY (artistID) REFERENCES Artist(artistID) ON DELETE CASCADE
);


-- insertion 
INSERT INTO FilmRole (movieID, artistID, role) VALUES
  (1, 1, 'Bruce Wayne / Batman'),
  (1, 2, 'The Joker'),
  (2, 3, 'Vincent Vega'),
  (2, 1, 'Tony Stark / Iron Man');

INSERT INTO ArtistSkill (artistID, skill) VALUES
  (1, 'Acting'),
  (1, 'Singing'),
  (2, 'Acting'),
  (3, 'Acting');
INSERT INTO Artist (artistName) VALUES
  ('Robert Downey Jr.'),
  ('Tom Hanks'),
  ('Leonardo DiCaprio');
INSERT INTO User (username, email) VALUES
  ('user1', 'user1@example.com'),
  ('user2', 'user2@example.com');
INSERT INTO Review (movieID, userID, rating, reviewText) VALUES
  (1, 1, 8.5, 'Great movie, loved the performances.'),
  (1, 2, 9.0, 'One of the best superhero movies.'),
  (2, 1, 7.5, 'Quirky and entertaining.'),
  (3, 2, 10.0, 'A masterpiece, highly recommended.');
INSERT INTO Media (movieID, mediaType, mediaURL) VALUES
  (1, 'Video', 'https://example.com/video1.mp4'),
  (1, 'Image', 'https://example.com/image1.jpg'),
  (2, 'Video', 'https://example.com/video2.mp4');
INSERT INTO Movie (movieTitle, releaseYear, plotSummary, duration, director, boxOfficeRevenue, imdbRating) VALUES
  ('The Dark Knight', 2008, 'Batman fights against the Joker in Gotham City.', 152, 'Christopher Nolan', 1000000000, 9.0),
  ('Pulp Fiction', 1994, 'Interconnected stories of criminals and their misadventures.', 154, 'Quentin Tarantino', 213000000, 8.9),
  ('The Shawshank Redemption', 1994, 'A tale of hope and friendship in a prison.', 142, 'Frank Darabont', 286000000, 9.3);
INSERT INTO Genre (genreName) VALUES
  ('Action'),
  ('Comedy'),
  ('Drama'),
  ('Horror');
