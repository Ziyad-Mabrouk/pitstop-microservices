CREATE DATABASE dev_db;
CREATE USER dev_user IDENTIFIED BY 'dev1234567890';
GRANT ALL PRIVILEGES ON dev_db.* TO dev_user;