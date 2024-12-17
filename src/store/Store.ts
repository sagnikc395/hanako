//in-memory store and whenver we flip it out for redis
// we can create a same shape for this with the given functionality

export abstract class Store {
 
  constructor() {}

  initRoom(roomId: string) {}

  getChats(room: string, limit: number, offset: number) {}

  addChat(room: string, limit: number, offset: number) {}
  upvote(room: string, chatId: string) {}
}

type UserId = string;
export interface Chat {
  //shape of our chat obj
  userId: UserId;
  name: string;
  message: string;
  upvotes: UserId[]; // who has upvoted what 
}

