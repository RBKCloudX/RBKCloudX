-- schema 
DROP DATABASE IF EXISTS blogX;
CREATE DATABASE blogX;
USE blogX;
-- table for a posts 
CREATE TABLE blogs (
    id INT NOT NULL AUTO_INCREMENT,
    --  author_id
    title VARCHAR(75) NOT NULL,
    imageUrl VARCHAR(400) NOT NULL,
    body TEXT NOT NULL,
    createdAt datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);
-- table for users
-- to run this schema you need to type this following code.
--  mysql -u root -p<schema.sql
INSERT INTO blogs (title, imageUrl, body)
VALUES(
        'helloworld',
        'test',
        'jslkjdflsqkjfljsqlkjflksjqflksqjlk'
    );