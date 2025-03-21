import { get } from "@/utils/request";
export const checkAuth = async () => {
  try {
    const req = get('check-auth');
    return await req;
  } catch (error) {
    console.error(error);
  }
}