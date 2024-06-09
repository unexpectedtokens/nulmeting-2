<template>
  <h1>Create a new message</h1>
  <form class="flex gap-5 items-stretch">
    <input
      v-model="newMessage"
      placeholder="Type your message here"
      class="border border-gray-400 rounded"
    />
    <button :disabled="!inputValid" @click="addMessageToStore">
      Create message
    </button>
  </form>
</template>

<script setup lang="ts">
const messageStore = useMessageStore();
const router = useRouter();

const newMessage = ref("");

const inputValid = computed<boolean>(() => {
  return newMessage.value.length > 2;
});

const addMessageToStore = () => {
  if (inputValid.value) {
    messageStore.addMessage(newMessage.value);

    router.push("/messages/read");
  }
};
</script>
