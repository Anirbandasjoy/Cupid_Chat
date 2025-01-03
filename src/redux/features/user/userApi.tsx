import baseAuthApi from "@/redux/api/baseApi";
import {
  currentUserResponse,
  logOutResponse,
  processSingUpRequest,
  processSingUpResponse,
  signupRequest,
  signupResponse,
} from "./interface";

const userApi = baseAuthApi.injectEndpoints({
  endpoints: (builder) => ({
    handleProcessSingUp: builder.mutation<
      processSingUpResponse,
      processSingUpRequest
    >({
      query: (user) => ({
        url: "/user/process-signup",
        method: "POST",
        body: user,
      }),
    }),

    handleSingup: builder.mutation<signupResponse, any>({
      query: (token) => ({
        url: "/user/signup",
        method: "POST",
        body: { token },
      }),
    }),

    handleLogOut: builder.mutation<logOutResponse, void>({
      query: () => ({
        url: "/auth/logOut",
        method: "POST",
      }),
    }),
    handleGetCurrentUser: builder.query<currentUserResponse, void>({
      query: () => "/auth/current-user",
    }),
  }),
  overrideExisting: false,
});

export const {
  useHandleSingupMutation,
  useHandleLogOutMutation,
  useHandleProcessSingUpMutation,
  useHandleGetCurrentUserQuery,
} = userApi;

export default userApi;
