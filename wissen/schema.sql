/* Preparacion de la template de la base de datos */

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS post;

/* Creacion de la tabla de datos para la seccion user */

CREATE TABLE user(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL 
);

/* Creacion de la tabla para los post de los usuarios */

CREATE TABLE post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author_id INTEGER NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES user (id)
);