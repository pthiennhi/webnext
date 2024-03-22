import { LOGIN_REQUEST, LOGIN_RESPONSE } from "@/models/auth/login.type";

  
  export const LoginService = async ({
    username,
    password,
  }: LOGIN_REQUEST): Promise<LOGIN_RESPONSE> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/Account/login`,
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
  