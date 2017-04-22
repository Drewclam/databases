-- Edit the file server/schema.sql to define, in SQL, the tables you have visually designed. Load the schema into your MySQL server with mysql -u root < path/to/schema.sql.
CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  userID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username TEXT
);

-- CREATE TABLE users_rooms (

-- );

CREATE TABLE rooms (
  roomID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  roomname TEXT
);

CREATE TABLE messages (
  messageID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  message TEXT,
  userID int NOT NULL FOREIGN KEY REFERENCES users(userID) -- DOESNT WORK, HOWTO PUT FORIEGN KEYS???
  -- rooms_id NOT NULL,
  -- FOREIGN KEY (rooms_id) REFERENCES rooms(id)
);
/* TEST ON SQL SERVER ----->>>>  mysql -u root < path/to/schema.sql      */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
/*
You can also run mysql in batch mode. To do this, put the statements you want to run in a file, then tell mysql to read its input from then file:
          shell> mysql < batch-file

If you need to specify connection parameters on the command line, the command might look like this:
          shell> mysql -h host -u user -p < batch-file
          Enter password: ********


if the query has a lot of output, this will make it look good in terminal
            shell> mysql < batch-file > mysql.out

If you want to get the interactive output format in batch mode, use mysql -t.

You can also use scripts from the mysql prompt by using the source command or \. command:
            mysql> source filename;
                  OR
            mysql> \. filename