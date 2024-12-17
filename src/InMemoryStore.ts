import { Store, type Chat, type UserId } from "./store/Store";

export interface Room {
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

  getChats(roomId: string, limit: number, offset: number): Chat[] {
    //return all the chats for a room
    const room = this.store.get(roomId);

    //while builiding chat apps , there could thousands of chat messages,
    // so that we don't want to return the whole thing and incrementally return
    // as they scroll up.
    //eg: last 50 chats -> limit = 50, offset = 0
    // next 50 chats -> limit= 50,offset= 50
    //TODO: add a unit test for this
    if (!room) {
      return [];
    }
    return room.chats
      .reverse()
      .slice(0, limit)
      .slice(-1 * limit);
  }

  addChat(userId: UserId, roomId: string, name: string, message: string): Chat {
    const room = this.store.get(roomId);

    if (!room) {
      return {
        userId: "",
        name: "",
        message: "",
        upvotes: [],
      };
    }
    const chat = {
      userId,
      name,
      message,
      upvotes: [],
    };
    room.chats.push(chat);
    return chat;
  }

  upvote(userId: UserId, roomId: string, chatId: string): Chat {
    const room = this.store.get(roomId);

    if (!room) {
      return {
        userId,
        name: "",
        message: "",
        upvotes: [],
      };
    }

    //TODO: make this faster
    const chat = room.chats.find(({ id }) => id === chatId);

    if (chat) {
      if (chat.upvotes.find((x) => x === userId)) {
        return chat;
      }
      chat.upvotes.push(userId);
    }
    return chat as Chat;
  }
}
