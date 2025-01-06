import cupidChatApi from "@/redux/api/baseApi";
import { loginRequest, loginResponse, logOutResponse } from "./interface";

const authApi = cupidChatApi.injectEndpoints({
  endpoints: (builder) => ({
    handleLogin: builder.mutation<loginResponse, loginRequest>({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    handleLogOut: builder.mutation<logOutResponse, void>({
      query: () => ({
        url: "/auth/logOut",
        method: "POST",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useHandleLoginMutation, useHandleLogOutMutation } = authApi;

export default authApi;
