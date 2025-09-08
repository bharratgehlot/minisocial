import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  signup: (userData) => api.post('/auth/signup', userData),
  getMe: () => api.get('/auth/me'),
};

export const postsAPI = {
  getPosts: () => api.get('/posts/read'),
  createPost: (postData) => api.post('/posts/create', postData),
  likePost: (postId) => api.post(`/posts/${postId}/like`),
  commentPost: (postId, comment) => api.post(`/posts/${postId}/comment`, comment),
};

export const usersAPI = {
  getProfile: (userId) => api.get(`/users/profile/${userId}`),
  followUser: (userId) => api.post(`/users/follow/${userId}`),
};

export const notificationsAPI = {
  getNotifications: () => api.get('/notifications/all'),
  markAsRead: (notificationId) => api.put(`/notifications/${notificationId}/read`),
};

export default api;