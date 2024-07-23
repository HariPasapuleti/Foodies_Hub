# Installation

1. ```bash
        npm create vite@latest
    ```
    * This command is used to create a new project using Vite, a modern build tool that provides a fast development environment.
2. ```bash
    npm install
    ```
    * This command is used to install all the dependencies required for the project's package.json file.
3. ```bash
        npm run dev
    ```
    * This command is used to start the development server and open the project in the browser.
4. ```bash
        npm install axios react-toastify react-router-dom
    ```
    * **axios**: A promise-based HTTP client for making requests to a server.
    * **react-toastify**: A library for adding toast notifications in a React application.
    * **react-router-dom**: A package for routing in React applications, allowing you to handle navigation between different views or pages.


# Basics

*** Vite is a modern build tool and development server for frontend projects. It aims to improve the development experience and performance by leveraging some advanced features. Here’s a brief overview of what Vite offers:
* Fast development server: Vite uses a modern build tool called Rollup to bundle your code
* Hot module replacement: Vite supports hot module replacement, which allows you to see changes in your code in real-time without having to reload the page.
* Tree-shaking: Vite uses Rollup to perform tree-shaking, which removes unused code from your bundle, resulting in smaller and faster builds.
* ES modules: Vite supports ES modules, which allows you to import and export code in a standardized way.
* Modern JavaScript: Vite supports modern JavaScript features such as async/await, arrow functions, and
* TypeScript: Vite supports TypeScript, which allows you to write your code in a strongly-typed
* CSS: Vite supports CSS, which allows you to write your styles in a separate file and 
* PostCSS: Vite supports PostCSS, which allows you to use modern CSS features

2. The main.jsx (or index.jsx, index.js, etc.) file in a React application serves as the entry point of the app.


# Explaination

1. `import ReactDOM from 'react-dom/client'`: Imports the ReactDOM package, specifically the client API, which is used to render React components into the DOM. (In main.jsx)
2. `import { BrowserRouter } from "react-router-dom"`: Imports the BrowserRouter component from the react-router-dom package. This component is used to handle routing within the React application.
3. `ReactDOM.createRoot(document.getElementById('root'))`: Creates a root for your React application. document.getElementById('root') selects the HTML element with the ID root where the React app will be mounted.