import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", {
  state: () => ({
    messages: [] as string[],
  }),
  actions: {
    addMessage(msg: string) {
      this.messages.push(msg);
    },
  },
});
