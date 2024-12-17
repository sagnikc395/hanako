//in-memory store and whenver we flip it out for redis
// we can create a same shape for this with the given functionality

export abstract class Store {
  constructor() {}

  initRoom(roomId: string) {}

  getChats(roomId: string, limit: number, offset: number) {}

  addChat(
    userId: UserId,
    roomId: string,
    name: string,
    message: string
  ){}
  upvote(userId: UserId, roomId: string, chatId: string) {}
}

export type UserId = string;
export interface Chat {
  //shape of our chat obj
  userId: UserId;
  name: string;
  message: string;
  upvotes: UserId[]; // who has upvoted what
}
