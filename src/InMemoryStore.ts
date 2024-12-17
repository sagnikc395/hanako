import { Store, type Chat } from "./store/Store";

interface Room {
  roomId: string;
  chats: Chat[];
}

export class InMemoryStore implements Store {
  private store: Map<string, Room>;
  constructor() {
    this.store = new Map<string, Room>();
  }

  initRoom(roomId: string): void {
    this.store.set(roomId, {
      roomId,
      chats: [],
    });
  }

  getChats(room: string, limit: number, offset: number): void {}

  addChat(room: string, limit: number, offset: number): void {}

  upvote(room: string, chatId: string): void {}
}
