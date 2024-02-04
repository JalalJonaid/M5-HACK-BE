DROP DATABASE IF EXISTS big_apple;
CREATE DATABASE big_apple;

\c big_apple;

CREATE TABLE saved_routes(
route_id SERIAL PRIMARY KEY,
uuid VARCHAR(50) UNIQUE NOT NULL,
starting_latitude INT NOT NULL,
starting_longitude INT NOT NULL,
ending_latitude INT NOT NULL,
ending_longitude INT NOT NULL
);


