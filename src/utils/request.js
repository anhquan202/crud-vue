import axios from "axios";
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})
export const get = async (path, option = {}) => {
  try {
    const response = await request.get(path, option);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export const post = async (path = '', data = {}, option = {}) => {
  try {
    const response = await request.post(path, data, option);
    return {
      'status': response.status,
      'data': response.data,
    }
  } catch (error) {
    return {
      'status': error.response.status,
      'errors': error.response.data
    }
  }
}
export const put = async (path, data, option = {}) => {
  try {
    const response = await request.put(path, data, option);
    return {
      'status': response.status,
      'data': response.data
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export const del = async (path) => {
  try {
    const response = await request.delete(path);
    return {
      'status': response.status,
      'data': response.data
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}