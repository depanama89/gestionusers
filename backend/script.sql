CREATE TABLE tblusers (
	id SERIAL NOT NULL PRIMARY KEY,
	email VARCHAR(120) UNIQUE NOT NULL,
	nom VARCHAR(50) NOT NULL,
	penom VARCHAR(50),
	password TEXT,
	
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE tblprofils (
	id SERIAL NOT NULL PRIMARY KEY,
	telephone INTEGER null,
	adresse TEXT,
	user_id INTEGER NOT NULL REFERENCES tblusers(id),
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE tblroles (
	id SERIAL NOT NULL PRIMARY KEY,
	libelle VARCHAR(50) NOT NULL,	
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE tblroles_users (
	id SERIAL NOT NULL PRIMARY KEY,
	roles_id INTEGER NOT NULL REFERENCES tblroles(id),
    user_id INTEGER NOT NULL REFERENCES tblusers(id),	
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tblposts (
	id SERIAL NOT NULL PRIMARY KEY,
	titre VARCHAR(120)  NOT NULL,
	description text NOT NULL,
	img Text [],
	user_id INTEGER NOT NULL REFERENCES tblusers(id),
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);