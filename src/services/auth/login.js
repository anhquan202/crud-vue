import { post } from "@/utils/request"
export const login = async (email, password) => {
  try {
    const data = {
      'email': email,
      'password': password
    }
    return await post('login', data);
  } catch (error) {
    console.error(error);
    alert('Connection failed. Please try again later.')
  }
}