-- schema 
DROP DATABASE IF EXISTS blogX;
CREATE DATABASE blogX;
USE blogX;


-- table for users

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(75) NOT NULL,
    lastName VARCHAR(75) NOT NULL,
    username VARCHAR(75) NOT NULL UNIQUE,
    email VARCHAR(75) NOT NULL UNIQUE,
    imageUrl VARCHAR(400) NOT NULL,
    bday VARCHAR(75) NOT NULL,
    password VARCHAR(150) NOT NULL, 
    PRIMARY KEY(id)
);

-- table for a posts 
CREATE TABLE blogs (
    post_id INT NOT NULL AUTO_INCREMENT,
    id int,
    -- post_id
    title VARCHAR(75) NOT NULL,
    body TEXT NOT NULL,
    createdAt datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(post_id),
     FOREIGN KEY (id) REFERENCES users(id)
);

-- to run this schema you need to type this following code.
--  mysql -u root -p<schema.sql
-- INSERT INTO blogs (title, imageUrl, body)
-- VALUES(
--         'helloworld',
--         'test',
--         'jslkjdflsqkjfljsqlkjflksjqflksqjlk'
--     );