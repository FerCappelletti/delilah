CREATE TABLE estados (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
estado VARCHAR(45) NOT NULL
);

INSERT INTO estados (estado) VALUES ('nuevo');
INSERT INTO estados (estado) VALUES ('confirmado');
INSERT INTO estados (estado) VALUES ('preparando');
INSERT INTO estados (estado) VALUES ('enviando');
INSERT INTO estados (estado) VALUES ('cancelado');
INSERT INTO estados (estado) VALUES ('entregado');

SELECT * FROM estados;