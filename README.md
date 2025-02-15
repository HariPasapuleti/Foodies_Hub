# Foodies Hub - Food Delivery App

Foodies Hub is a full-stack food delivery application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes an admin panel for managing food items and orders, and a user-facing app for browsing, ordering, and tracking food deliveries.

## Features
### Customer Frontend
- User-friendly interface for browsing food items, managing the cart, and placing orders.
- Includes authentication and order tracking.

### Admin Panel
- Manage food items, view orders, and add new food entries.
- Built for efficient restaurant management.

### Backend Server
- RESTful APIs for handling food items, users, orders, and carts.
- Secure and scalable using MongoDB and Express.js.

---
## Technologies Used

- **Frontend**: React.js, React Router, React Toastify
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Render (Backend), Vercel/Netlify (Frontend)

---

## Project Folder Structure
- **Admin Folder**: Contains the admin React app with components like `Navbar` and `Sidebar`, and pages for adding, listing, and managing orders (`Add`, `List`, `Orders`).

- **Frontend Folder**: Houses the customer-facing React app with components like `Navbar`, `Footer`, and `LoginPopUp`, and pages for browsing, cart management, placing orders, and tracking orders (`Home`, `Cart`, `PlaceOrder`, `MyOrders`).

- **Backend Folder**: Hosts the Express.js server with API endpoints for food, users, carts, and orders, along with database integration (MongoDB) and middleware configurations.
---

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB server (Local or Cloud)
- Git installed

### Clone the Repository
```bash
git clone https://github.com/HariPasapuleti/Foodies_Hub.git
cd Foodies_Hub
```

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `backend` folder with the following:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     PORT=4000
     ```
4. Start the server:
   ```bash
   npm start
   ```

### Admin Panel Setup
1. Navigate to the admin folder:
   ```bash
   cd admin
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Deployment
- The app can be deployed using platforms like Render, Vercel, or Netlify for the frontend and admin panel.
- For the backend, use platforms like Heroku or Render.

---
## API Endpoints

### Food Endpoints
- `GET /api/food` - Get all food items.
- `POST /api/food` - Add a new food item.
- `PUT /api/food/:id` - Update a food item.
- `DELETE /api/food/:id` - Delete a food item.

### User Endpoints
- `POST /api/user/register` - Register a new user.
- `POST /api/user/login` - Log in a user.

### Cart Endpoints
- `GET /api/cart` - Get cart details.
- `POST /api/cart` - Add items to the cart.

### Order Endpoints
- `POST /api/order` - Place a new order.
- `GET /api/order` - Get order details.

---
## Screenshots

### Customer Frontend
![Customer Frontend](https://raw.githubusercontent.com/HariPasapuleti/Images/main/Project/Foodies_Hub.png)

### Admin Panel
![Admin Panel](https://raw.githubusercontent.com/HariPasapuleti/Images/main/Project/Foodies_Hub_Admin.png)

---

## Contributing
Contributions are welcome! Please create a pull request or open an issue for any feature requests or bugs.

## Acknowledgments
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
---

### Author
**[Hari Pasapuleti]** - Full Stack Developer

---
