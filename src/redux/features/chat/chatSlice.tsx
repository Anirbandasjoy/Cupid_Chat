import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  chatId: string | null;
}

const initialState: ChatState = {
  chatId: typeof window !== "undefined" ? localStorage.getItem("chatId") : null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatId: (state, action: PayloadAction<string>) => {
      state.chatId = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("chatId", action.payload);
      }
    },
    clearChatId: (state) => {
      state.chatId = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("chatId");
      }
    },
  },
});

export const { setChatId, clearChatId } = chatSlice.actions;

export default chatSlice.reducer;
