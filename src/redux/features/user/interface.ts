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

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  onlineStatus: string;
}

export interface IPagination {
  totalPages: number;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
}

export interface findAllUsersResponse {
  success: boolean;
  message: string;
  payload: {
    users: IUser[];
    pagination: IPagination;
  };
}

export interface findAllUserRequest {
  search: string;
}
