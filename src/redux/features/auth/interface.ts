export interface loginRequest {
  email: string;
  password: string;
}

export interface loginResponse {
  success: boolean;
  message: string;
  payload: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
}

export interface logOutResponse {
  success: boolean;
  message: string;
}
