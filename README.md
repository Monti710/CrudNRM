# CrudNRM
In this project use the framework Node for backend, also use framework React for fronted and for data base I use MongoDB

#Project CRUDNRM

#Installation

#1. Clone the repository:
   git clone https://github.com/IsmaelMontielHome/CrudNRM
   cd repository-name

#2. Install dependencies:
   npm install

#3. Set up environment variables:
   Copy the .env.example file to .env and modify the variables as needed.

#4. Run the project:
   npm run start

Database Setup

#1. Create the database:
   createdb database_name

#2. Run migrations (if applicable):
   npm run migrate

#3. Seed the database (if applicable):
   npm run seed

Running Tests

npm run test

Command for view all procces what working in the Puerto

LSOF -I :3000

Command for kill a process that are running in the port

kill -9 22293 after -9 you must write the PID of the process

Command fot use node.js

npm ini -y #create the fiel of package.json

npm i express -- install express in your project

npm i nodemon -D -- nodemon is a command-line tool that allows developers to monitor changes to the source code and automatically restart the application whenever a change is detected. nodemon is a Node.js package that is installed through npm, the Node.js package manager.

npm i morgan -- install morgan

npm run dev -- command save for run server 

npm i mongoose is for mongo to validate the data before being inserted into the database

npm i bcryptjs for encrypted passwords

npm i jsonwebtoken for generate token