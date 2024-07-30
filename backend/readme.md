# BACKEND

## Installation

1. For creating backend run a command: 
    ``` bash
    npm init
    ```
    
2. Put package name as default (foldername - backend).
3. Add server.js file at entry point. Add create a server.js file in backend folder.
4. Add dependencies through 
    ```bash 
    npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon
    ```

### Dependecies Used

* **express** - For creating server.
* **mongoose** - Used to connect with the database.
* **jsonwebtoken** - Used to generate token for authentication.
* **bcrypt** - Using this we can encrypt the data and store in database.
* **cors** - Gives permission for frontend to connect with the backend.
* **dotenv** - Used to store the secret key in .env file. By this we can use the environment variable in our project.
* **body-parser** - Using this we can parse the datat comming through the user.
* **multer** - Using this we can create the image store system
* **stripe** - Using this we can add the payment gateways on the webpage.
* **validator** - Used to validate the data comming from the user.
* **nodemon** - Used to restart the server automatically when we make any changes in the code

## Backend Running

1. Modify scripts object in package.json to 
    ``` bash 
    "scripts": {
        "server": "nodemon server.js"
    }
    ```
   - By this line whenever you run server, it runs `server.js` file.
3. Run the server by running command `npm run server` or `npm run dev`

2. More information about scripts 
    ``` bash
    "scripts": {
    "start": "node server.js",            // Runs the server without nodemon
    "dev": "nodemon server.js",           // Runs the server with nodemon in development mode
    "test": "mocha tests/**/*.js",        // Runs tests using Mocha (adjust as needed)
    "lint": "eslint .",                  // Lints code using ESLint (adjust as needed)
    "build": "webpack --config webpack.config.js" // Builds project using Webpack (if applicable)
    }
    ```

4. Run a command `npm start` to start the server.
5. Run a command `nodemon server.js` to start the server automatically when we make any changes in the code.


## Created Folders

1. **controllers** - We add logic for backend.
2. **models** - Contains all the models of our mongodb database.
3. **routes** - Contains all the routes.
4. **config** - We store the database configuration files
5. **middleware** - We will store all the middlewares.
6. **uploads** - Upload all the images uploaded by the user.

### Create Files
- **server.js** - Contains the main code for the backend.
- Create `.env` file, where we store all the environment variables.

### Steps

* To use the " es6 " features add `"type": "module" in package.json.

### Few functionality Explainations


1. Backend Setup
    * Define the port number in server.js where out server will be running. 
    * Whenever the request is comming from frontend to backend then it is passed using `json` (express.json) - middleware.
    * `"get("/path")` method is a http method using this we can request the data from the server.
        - In get function we can pass the arrow function. Through taking parameters.
    * To run the express server we us `app.listen` function and provide the port number
> **Note1**: Insted of running in browser, use *Thunder Client* Extension in VScode. And send new request in that extension and paste the url link `http://localhost:4000/` and tap send option by selecting get function.  

> **Note2**: () => { } is a adder function, () - feild name, { } - object defining.

> **Note3**: The line export default foodModel; is part of the ES6 module system in JavaScript. It is used to export the foodModel object so that it can be imported and used in other files within your application.



2. Database connectivity
    1. while connecting with database mongodb, 
    2. ("_id": "669b75b49a107958c90c3904" || await foodModel.findByIdAndDelete(req.body.id))Item id is directly created by the mongodb.








<!-- * `res.json()` method is used to send the data to the frontend. -->

## Used functions and some other technolagies

1. **async** - async functions return promises and allow the use of await.
2. **await** - The await keyword can only be used inside an async function. It makes JavaScript wait until the promise is resolved or rejected.
3. **use** - The use function is used to mount (ex:- middleware in server.js file) functions at a specific path.
4. **get** - The get function is used to define a route handler for GET requests to a specific path.
5. **post** - The post function in express is used to define a route handler for POST requests to a specific path.
6. **listen** -  The listen function in Express is used to bind and listen for connections on a specified host and port. This function is crucial for starting the server and making it ready to handle incoming HTTP requests.
7. **Schema** - A Mongoose schema defines the structure of the documents within a collection in MongoDB. It specifies the fields, their types, and validation rules.
8. **Model** -  A Mongoose model provides an interface to interact with the database collection. It allows you to perform CRUD (Create, Read, Update, Delete) operations and use other utility methods.
9. **Models** - This is an object that stores all the models that have been created. It allows Mongoose to cache models and avoid redefining them if they already exist.
10. **single("image")**: Specifies that a single file will be uploaded with the form field name image. (Used in foodRouter.js)
11. **diskStorage** - A function in the multer middleware for handling file uploads. It allows you to configure the storage location and the filename for the uploaded files.
12. **findById** - Finds the food model using the "id".
14. **{minimize:false}**: Create data entry without any data.




> **Note** - Schema, Model, and Models(In foodModels.js) in the context of Mongoose, which is an ODM (Object Data Modeling) library for MongoDB and Node.js.

> **Note1** - "fs" is prebuilt function in nodejs.


> **Note** - The best of implementing payment gatway is using web hooks. But it was lenthy and time consuming.