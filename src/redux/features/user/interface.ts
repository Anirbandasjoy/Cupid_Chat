export interface logOutResponse {
  success: boolean;
  message: string;
}

export interface currentUserResponse {
  success: boolean;
  message: string;
  payload: {
    _id: string;
    name: string;
    email: string;
    role: string;
    onlineStatus: boolean;
  };
}

export interface processSingUpResponse {
  success: boolean;
  message: string;
}

export interface processSingUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface signupRequest {
  token: string;
}
export interface signupResponse {
  success: boolean;
  message: string;
}
