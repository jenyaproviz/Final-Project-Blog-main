# Final Project Blog

A fullstack blog application with a React client and Node.js/Express/MongoDB server.

## Prerequisites
- Node.js (v18 or later recommended)
- npm or pnpm
- MongoDB (local or remote)

## Project Structure
```
Project Blog/
	client/    # React frontend
	server/    # Express backend
```


## Deploying to Render.com

If deploying to Render.com, set the following in your Render service:
- **Build Command:** `npm install --prefix "Project Blog/server" && npm install --prefix "Project Blog/client"`
- **Start Command:** `npm start`

This will run the backend server. If you want to deploy the frontend separately, use the client folder and its own start/build scripts.

---

## Setup Instructions

### 1. Clone the repository
```
git clone <repo-url>
cd "Project Blog"
```

### 2. Install dependencies
#### Server
```
cd server
npm install
```
#### Client
```
cd ../client
npm install
```

### 3. Environment Variables
Create a `.env` file in `server/` with at least:
```
PORT=8080
DB_USER=root
DB_PASSWORD=123456
DB_NAME=youtube
ADMIN_CODE=admin
JWT_SECRET=1234567890
ACCESS_KEY=VITE_API_KEY
```

### 4. Start the project
#### Start the server
```
cd server
npm run dev
```
#### Start the client
```
cd ../client
npm start
```

- The client will run at [http://localhost:3000](http://localhost:3000)
- The server will run at [http://localhost:8080](http://localhost:8080) (or your specified port)

## Features
- User authentication (register/login)
- Create, edit, delete, and view blog posts
- Comment on posts
- Contact form
- Responsive design

## Troubleshooting
- If the browser does not open automatically, open [http://localhost:3000](http://localhost:3000) manually.
- Ensure MongoDB is running and accessible.
- For Windows, the client uses `cross-env` to open Chrome by default. Change the `BROWSER` variable in `client/package.json` if you want a different browser.

## License
MIT
# Final-Project-Blog
Final Project Blog
