DROP DATABASE IF EXISTS big_apple;
CREATE DATABASE big_apple;

\c big_apple;

CREATE TABLE saved_routes(
uuid SERIAL PRIMARY KEY,
starting_latitude INT NOT NULL,
starting_longitude INT NOT NULL,
ending_latitude INT NOT NULL,
ending_longitude INT NOT NULL
);


