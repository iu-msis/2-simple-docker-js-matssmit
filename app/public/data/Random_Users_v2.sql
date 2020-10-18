CREATE DATABASE matt1;

USE matt1;

CREATE TABLE Random_Users1 (
	userId INTEGER PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(64),
    lastName VARCHAR(64)
);

INSERT INTO Random_Users1 (userId, firstName, lastName) VALUES
(1, "Matthew", "Smith"),
(2, "Omkar", "Tamkhankar"),
(3, "Nicole", "LaRue");

SELECT * FROM Random_Users1;