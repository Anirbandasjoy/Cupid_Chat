import cupidChatApi from "@/redux/api/baseApi";
import {
  currentUserResponse,
  findAllUserRequest,
  findAllUsersResponse,
  processSingUpRequest,
  processSingUpResponse,
  signupResponse,
} from "./interface";

const userApi = cupidChatApi.injectEndpoints({
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

    handleGetCurrentUser: builder.query<currentUserResponse, void>({
      query: () => "/user/current-user",
    }),
    handleFindAllUsers: builder.query<findAllUsersResponse, findAllUserRequest>(
      {
        query: ({ search }) => ({
          url: "/user/find-users",
          method: "GET",
          params: { search },
        }),
      }
    ),
  }),
  overrideExisting: false,
});

export const {
  useHandleSingupMutation,
  useHandleFindAllUsersQuery,
  useHandleProcessSingUpMutation,
  useHandleGetCurrentUserQuery,
} = userApi;

export default userApi;
