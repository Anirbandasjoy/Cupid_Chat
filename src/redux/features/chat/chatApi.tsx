import cupidChatApi from "@/redux/api/baseApi";
import {
  createChartRequest,
  createChatResponse,
  getChatRequest,
  getChatResponse,
  sendMessageRequest,
  sendMessageResponse,
} from "./interface";

const chatApi = cupidChatApi.injectEndpoints({
  endpoints: (builder) => ({
    handleCreateChat: builder.mutation<createChatResponse, createChartRequest>({
      query: ({ receiverId }) => ({
        url: "/chat/create",
        method: "POST",
        body: { receiverId },
      }),
    }),
    handleSendMessage: builder.mutation<
      sendMessageResponse,
      sendMessageRequest
    >({
      query: ({ content, chatId }) => ({
        url: "/message/send",
        method: "POST",
        body: {
          content,
          chatId,
        },
      }),
    }),
    handleGetChat: builder.query<getChatResponse, getChatRequest>({
      query: ({ chatId }) => ({
        url: `/chat/${chatId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useHandleCreateChatMutation,
  useHandleSendMessageMutation,
  useHandleGetChatQuery,
} = chatApi;

export default chatApi;
