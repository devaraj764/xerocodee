import axios from 'axios';
const token = localStorage.getItem('token');
const URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api'

// Create an instance of Axios with custom configuration
const axiosInstance = axios.create({
  baseURL: URL, // Replace with your API's base URL
  timeout: 10000, // Set a timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Default content type for requests
    'Authorization': `Bearer ${token}`
  },
});

export default axiosInstance;
