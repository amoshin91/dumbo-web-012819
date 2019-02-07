# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `flatironschool.sqlite3` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges
1. Create a table that is named `students` inside of the `flatironschool.sqlite3` database file

```sql
CREATE TABLE students (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, dob TEXT, password TEXT);
```

2. Insert data into the database!

```sql
INSERT INTO students (name, email, dob, password) VALUES ("Prince", "prince@flatironschool.com", "0308", "corgis");
```

3. Reading Data from the database
```sql
SELECT * FROM students; -- This will read everything from the table students
SELECT * FROM students WHERE id = 1; -- This will only read the item at id = 1
SELECT * FROM students WHERE name = "Prince"; -- This will get every item where the name is equal to Prince
```

4. Update Data in the Database

```sql
UPDATE students SET name = "Prince Wilson" WHERE id = 1; -- updates the 1 item that matches
UPDATE students SET name = "Prince Wilson"; -- updates everything in the table students with that name
```


5. Deleting Data in the Database
```sql
DELETE FROM students WHERE id = 1; -- deletes the 1 item that matches
DELETE FROM students; -- Deletes everything in the table students
```
