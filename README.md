# MiniSocial - College Social Network

A college-based social networking platform built with React, Node.js, Express, and MongoDB.

## Features

- **User Authentication**: Email/password signup and login with JWT sessions
- **Post Creation**: Users can create and share posts with their college community
- **File Upload**: Support for image and video uploads in posts
- **Social Interactions**: Like and comment on posts
- **Follow System**: Follow other users from your college
- **Email Notifications**: Get notified when someone interacts with your posts
- **Mobile Responsive**: Fully responsive design using Bulma CSS framework

## Tech Stack

### Frontend
- React 18
- Vite (Build tool)
- React Router (Navigation)
- Bulma CSS (Styling)
- Axios (HTTP client)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Multer (File uploads)
- Nodemailer (Email notifications)
- bcryptjs (Password hashing)

## Installation Guide

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
# Copy .env file and update with your values
MONGODB_URI=mongodb://localhost:27017/minisocial
JWT_SECRET=your_jwt_secret_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
PORT=5000
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

1. Open your browser and go to `http://localhost:5173`
2. Sign up with your college email
3. Start creating posts and connecting with your college community
4. Like, comment, and follow other users

## Project Structure

```
minisocial/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Posts
- `GET /api/posts/read` - Get all posts
- `POST /api/posts/create` - Create new post
- `POST /api/posts/:id/like` - Like/unlike post
- `POST /api/posts/:id/comment` - Add comment

### Users
- `GET /api/users/profile/:id` - Get user profile
- `POST /api/users/follow/:id` - Follow/unfollow user

### Notifications
- `GET /api/notifications/all` - Get user notifications
- `PUT /api/notifications/:id/read` - Mark as read

## Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

### Backend (Railway)
1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically on push

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas cluster
2. Update MONGODB_URI in environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.