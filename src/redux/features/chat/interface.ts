export interface createChartRequest {
  receiverId: string;
}
export interface createChatResponse {
  success: boolean;
  statusCode: number;
  message: string;
  payload: any;
}

export interface sendMessageRequest {
  content: string;
  chatId: string;
}

export interface sendMessageResponse {
  success: boolean;
  statusCode: number;
  message: string;
  payload: any;
}

export interface getChatResponse {
  success: boolean;
  statusCode: number;
  message: string;
  payload: any;
}

export interface getChatRequest {
  chatId: string;
}
