CREATE DATABASE test_db;
CREATE USER test_user IDENTIFIED BY 'test1234567890';
GRANT ALL PRIVILEGES ON test_db.* TO test_user;