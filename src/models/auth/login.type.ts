export type LOGIN_RESPONSE = {
    statusCode: number;
    message: string | null;
    data: {
        accessToken: string;
        fullname: string;
        role: string;
        expirationTime: string;
    } | null;
};

export type LOGIN_REQUEST = {
    username: string;
    password: string;
};