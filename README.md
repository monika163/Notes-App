# Notes App

The NOTEBOX is a full-stack CRUD Todo app developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It comes with authentication, allowing users to manage their tasks by adding titles, descriptions, and due dates. Additionally, users can edit or delete existing notes to keep their tasks organized.

Deployed link : https://notes-app-2t7k.onrender.com

## Notes App with MongoDB, Express, React & Nodejs (MERN).

- [Key Features](#key-features)
- [Technologies used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
- [Configuration and Setup](#configuration-and-setup)
- [📸 Screenshots](#screenshots)
- [Author](#author)

## Key Features

- **User Authentication:**

  - Secure user authentication to ensure data privacy and personalization.

- **Create, Read, Update, Delete (CRUD) Functionality:**
  - Add new notes with a title, description, and due date.
  - View existing notes with essential details.
  - Edit notes to update information.
  - Delete unwanted notes to keep the list clean.

## Technologies used

This project was created using the following technologies.

#### Frontend

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface

#### Backend

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [Nodemon](https://www.npmjs.com/package/nodemon) - an auto-refresh the server on code change
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [concurrently](https://www.npmjs.com/package/concurrently) - allow coders to run multiple scripts with one command
- [nodemon](https://www.npmjs.com/package/nodemon) - an auto-refresh the server on code change
- [express-validator](https://www.npmjs.com/package/express-validator) - An express.js middleware for validator.js

#### Database

- [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.

## Configuration and Setup

### Setup .env file

```shell
PORT=
MONGO_URI=

```

### Installation

```shell
Install dependencies for server
npm install

Install dependencies for client
cd client
npm install

Run the client & server with concurrently
npm run dev

Run the Express server only
npm run server

Run the React client only
npm run client

Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Screenshots

#### Login

If a user has an existing account on Notes App, they can simpy Login using their login details.

![1  login](https://github.com/monika163/Notes-App/assets/61625011/8a88a380-6110-40b0-9e34-e776c41b52f7)

---

#### Sign Up

If a user dose not have an existing account on Notes App, they can create one, simply by clicking on the Sign Up button, and filling in the required details.

![2  register](https://github.com/monika163/Notes-App/assets/61625011/8efd16a3-be0a-4392-9db5-94b5e2996ebe)

A user has to either Login or Sign Up before they can use Notes App.

---

#### Home Page

Once the user has signed in, they will find themselves on this Home Screen, which currently has no notes.

![3  add notes](https://github.com/monika163/Notes-App/assets/61625011/26f38cf1-ee33-4f51-be5b-3faaa554be26)

They can simply add a new note by filling in the necessary details like the Note Title, Description, and Doe Dates. Once they do this, they'll be able to add that note simply by clicking on the Add Note button.

![4   adding notes](https://github.com/monika163/Notes-App/assets/61625011/28b301e7-718d-436b-bc69-1688da42765b)

Once they click on the Add Note button, there note will be added on the Home Screen, which they can view after login in, and no one else can see it.

![5  added notes](https://github.com/monika163/Notes-App/assets/61625011/3223aded-38f9-4f33-b543-ee606eb914fe)

---

#### Updating/Deleting a Note

If the user wants to update or delete a note, they can do so by simply clicking on the Delete (trashcan) icon, or the Update (pen/note) icon next to the particular note.

If they click on the update icon, a modal will pop up where they can update whatever they want, and can save the changes simply by clicking on the Update Note button once they're happy.

![6  updating and deleting a notes](https://github.com/monika163/Notes-App/assets/61625011/aea55ab4-61cb-4b9f-887e-bc1471cf2f22)

Once the user is done using the application, they can simply log out using the Logout button on the top right corner, so that no one else will be able to see their notes without logging in.

Bycrypt.js and JWT Authentication have been used to enhance the overall security of the application.

---

## Author

- Portfolio: [monika163](----)
- Github: [monika163](https://github.com/monika163)
- Linkedin: [monika163](https://www.linkedin.com/in/monika-dewangan-78a427149/)
