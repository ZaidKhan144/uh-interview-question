System Requirements
- Local, running MySQL server (or Docker)
- Node and npm

## Submitting Your Work
To submit your work:
- [] Delete `📁 .env`
- [] (If using Docker) Delete/Restore the password in `📁 server/docker-compose.yml`
- [] Delete `📁 node_modules/` 
- [] Delete `📁 client/src/campus-directory/node_modules/`
- [] Compress/Zip the `📁 interview-question/`
  * If your compressed file is greater than 2MB double check all of the node_module folders are deleted. 
- [] Reply to the original email and attach the `📄 interview-question.zip`

## Phase 0: Before Beginning...
- [] Install the project’s dependencies.
- [] Create a copy of the `📄 example.env` file and call it `.env`, if such a file doesn't exist. The values in the new file will populate your environment variables, and database credentials in particular.
- [] Ensure that the MySQL server is running on your computer (by logging in via the terminal or using brew services list if you installed it with Homebrew).
  * If it is not, you may need to run `brew services start mysql`, `mysql.server start`, or a similar command, depending on how you installed MySQL.  
  * Alternatively, use Docker by navigating to `📁 server/` and running `docker compose up`
    * This uses the 
- [] Quickly scan the requirements below and study the provided codebase to assess what's been provided to you, what you will need to refactor, and what you might need to create to complete the app.

## Phase 1: 
### Part 1. Set up the server
- [] For the rest of the assessment, make sure to add and commit work after each checkbox step. Use descriptive commit messages.
- [] Seed the database by running the `📄 server/seed.js` file,
  * This will **delete** any existing `directories` databases! Please make sure you are using not using a preexisting server to connect to.
  * Look at the `📄 server/seed.js` to familiarize with the database and table structures.
- [] Implement the `findAll` method in the `📄 server/models/Directory.js` by writing an SQL query that retrieves all records from the database in the following format:
  * pictureUrl
  * firstName
  * lastName
  * title
  * email
  * phone
  * mailcode
  * mailingAddress
  * building
  * roomNumber
  * departmentName `This is in the departments table`
  * Make sure to handle errors in this and other async methods.
- [] Start the server by running `📄 server/index.js`
- [] Navigate to `http://localhost:<PORT>/api/directory` verify it is returning the correct data structure
    * replace `<PORT>` with your `📄 .env` PORT variable value 
    
### Part 2. Implementing the Client
- [] Read the commentary in `📄 src/sidenav/format.xsl`. Identify and fix the sidenav's anchor elements' hrefs not populating correctly.
  * Use `npm run build:sidenav` to generate the `📄 client/dist/views/_ssi/sidenav.php` file.
  * Navigate to `http://localhost:<PORT>/index.php` and verify the side navigation links equal the hrefs from `📄 src/sidenav/sidenav.xml`.
- [] In your terminal, change directories to `📁 client/src/campus-directory`
  * Install dependencies for this folder
- [] Add a fetch function to `📁 client/src/campus-directory/app/App.jsx` retrieve data from the server's /api/directory endpoint
  - [] Use the method setData() to store the response from the fetch function
- [] Run `npm run build` to generate the `📄 client/dist/public/_js/campus-directory.js`.
  - [] Add a `<script>` element in `📄 client/dist/views/index.php` to load the generated file.
- [] Navigate to `http://localhost:<PORT>/index.php` and verify the campus-directory component is loading correctly
- [] The finished page should look like `📄 Phase 1 Complete.png`


## Phase 2: 
### Part 1: Implementing a PHP/MySQL Page
- [] Go to `📄 client/dist/views/biography.php` and update the $config variable with your database credentials.
- [] Navigate to `http://localhost:<PORT>/biography.php` and fix following errors that appear on the page:
  - [] Warning: Undefined array key "departmentName".
  - [] Warning: Undefined variable $departmentName
- [] The finished page should look like `📄 Phase 2 Complete.png`


## Additional Resources
mysql2 and mysql (interface) npm packages https://www.npmjs.com/package/mysql2  
SQL syntax reference (MySQL v8) https://www.mysql.com/  
Express.js (v4 docs) https://expressjs.com/  
PHP (Homebrew) https://formulae.brew.sh/formula/php  
MySQL (Homebrew) https://formulae.brew.sh/formula/mysql  
XSLT (npm package) https://www.npmjs.com/package/xslt3  
php-express (npm package) https://www.npmjs.com/package/php-express?activeTab=readme  