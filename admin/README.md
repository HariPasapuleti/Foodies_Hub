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
4. `onChange={(e) => setImage(e.target.files[0])}` by adding this property in input field and `const [image, setImage] = useState(false);` state variable in add.jsx. we can access the file from own pc. But can't get the preview of the image in frontend of admin panel.
5. `URL.createObjectURL(image)`: Used for previewing the uploaded image.
6. `setdata(data => ({...data, [name]:value}))`: data(previous data), `...data, [name]:value`(taking previous data for getting value by taking feild name).
7. `onChange={onChangeHandler}`: This specifies the function that should be called whenever the value of the input changes.
8. `event.preventDefault();`: prevents from reloading pages.


# Functions

1. **BrowserRouter** (aliased as Router in the example): The router component that keeps the UI in sync with the URL. (Linked in main.jsx)
2. **Route**: Defines a mapping between a URL path and a component.
3. **Routes**: A container for all your Route components.
4. **Link**: Allows navigation between routes without reloading the page.
5. **NavLink**
    * Purpose: Creates clickable links with styling for active routes.
    * Usage: Used in the render method to display navigational links.
    * Used for user interaction (clickable links).
    * Supports active styling to highlight the current route.
    * Navigation menus, links within your application.
6. **Navigate**
    * Purpose: Programmatically redirects users to a different route.
    * Usage: Used inside components or functions to perform navigation based on conditions or actions.
    * Used for programmatic navigation (automatic redirection).
    * Does not handle styling; purely for redirection.
    * Redirects after form submissions, authentication checks, or conditional logic.

7. **Props**: To style the active link, you can use the activeClassName prop to specify the class name to apply when the link is active. You can also use the activeStyle prop to specify the style object to apply when the link is active.