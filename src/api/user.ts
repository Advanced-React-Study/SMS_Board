import instance from "./instance";

export const loginAPI = (id: string, password: string) => instance({
  method: 'POST',
  url: '/user/login',
  data: {
    id,
    password,
  }
});

export const registerAPI = (id: string, password: string, name: string) => instance({
  method: 'POST',
  url: '/user/register',
  data: {
    id,
    password,
    name,
  }
});
