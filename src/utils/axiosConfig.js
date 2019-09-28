import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5500/api',
  headers: {
    'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjVkOGRkOWJmODdkNDE2YTI4OTk1NWFmZSJ9LCJpYXQiOjE1Njk1Nzc0MDcsImV4cCI6MTU2OTkzNzQwN30.28nf1zirtl0kWrDZRsC41j6Y_38YEoKBWO7h3ls4hJk'
  }
})

export default instance