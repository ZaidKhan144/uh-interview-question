// Make sure to run this file from the prompt (JotNet) directory
// and not a sub-drectory.
const db = require("./db.js");
const Directory = require("./models/Directory.js");
const directoryData = require("./_data/directoryData.json");
const departmentsData = require("./_data/departmentsData.json");

const createDatabase = async () => {
  await db.queryAsync(`DROP DATABASE IF EXISTS directory`)
  .then(() => db.queryAsync(`CREATE DATABASE directory`))
  .then(() => db.queryAsync(`USE directory`))
  .then(() => console.log("Database created"))
  .catch((err) => {
    console.log("Error creating the database: ", err);
    process.exit();
  })
};

const createDirectoryTable = async () => {
  await db.queryAsync(`DROP TABLE IF EXISTS posts`)
  .then(() => db.queryAsync(
    `CREATE TABLE IF NOT EXISTS directories (
      id INT PRIMARY KEY AUTO_INCREMENT,
      departmentId CHAR(4),
      pictureUrl VARCHAR(255),
      firstName VARCHAR(50),
      lastName VARCHAR(50),
      title VARCHAR(100),
      email VARCHAR(100),
      phone VARCHAR(15),
      mailcode VARCHAR(10),
      mailingAddress VARCHAR(255),
      building VARCHAR(50),
      roomNumber VARCHAR(10),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`
  ))
  .then(() => Promise.all(directoryData.map((directory) => Directory.createOne(directory))))
  .then(() => console.log("Directory table created"))
  .catch((err) => {
    console.log("Error creating the Directory table: ", err);
    process.exit();
  })
};

const createDepartmentsTable = async () => {
  await db.queryAsync(`DROP TABLE IF EXISTS departments`)
  .then(() => db.queryAsync(
    `CREATE TABLE IF NOT EXISTS departments (
      departmentId CHAR(4) PRIMARY KEY,
      departmentName VARCHAR(100)
    )`
  ))
  .then(() => Promise.all(departmentsData.map((department) => db.queryAsync(`INSERT INTO departments (departmentId, departmentName) VALUES (?, ?)`, [department.departmentId, department.departmentName]))))
  .then(() => console.log("Departments table created"))
  .catch((err) => {
    console.log("Error creating the Departments table: ", err);
    process.exit();
  })
};

// Connect to the database and create the tables
db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => createDatabase())
  .then(() => createDirectoryTable())
  .then(() => createDepartmentsTable())
  .then(() => console.log("The database has been reset!"))
  .catch((err) => {
    console.log("Error connecting to MySQL: ", err);
    process.exit();
  })
  .finally(() => {
    db.end();
    process.exit();
  });

