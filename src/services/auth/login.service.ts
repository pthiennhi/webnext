import { LOGIN_REQUEST, LOGIN_RESPONSE } from "@/models/auth/login.type";

export const LoginService = async ({
  username,
  password,
}: LOGIN_REQUEST): Promise<LOGIN_RESPONSE> => {
  const response = await fetch(
    `https://iot.wyvernp.id.vn/api/v1/auth`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    },
  )
    .then(async (res) => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      } else {
        return data;
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
  return response;
};

export const FakeLoginService = async ({
  username,
  password,
}: LOGIN_REQUEST): Promise<LOGIN_RESPONSE> => {
  return {
    statusCode: 200,
    message: "Login success",
    data: {
      accessToken: "fake-access-token",
      fullname: "Fake User",
      role: "Admin",
      expirationTime: (new Date().getTime() + 1000 * 60 * 60).toString(),
    },
  };
}
const BASE_URL = "https://iot.wyvernp.id.vn/api/v1/auth"

export const LoginMain = async ({
  username,
  password,
}: LOGIN_REQUEST): Promise<LOGIN_RESPONSE> => {
  const response = await fetch(
    `${BASE_URL}/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    },
  )
    .then(async (res) => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      } else {
        return data;
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
  return response;
};