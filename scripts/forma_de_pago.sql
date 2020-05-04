CREATE TABLE formas_de_pago (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
forma_pago VARCHAR(45) NOT NULL
);
INSERT INTO formas_de_pago  (forma_pago) VALUES ('efectivo');
INSERT INTO formas_de_pago  (forma_pago) VALUES ('crédito');
INSERT INTO formas_de_pago  (forma_pago) VALUES ('débito');

SELECT * FROM formas_de_pago;