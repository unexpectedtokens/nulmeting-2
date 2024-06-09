<template>
  <h1>Messages</h1>
  <p v-if="messages.length === 0">You have no messages yet</p>
  <div v-for="message of messages">
    <p>{{ message }}</p>
  </div>

  <NuxtLink to="/messages/add">Add a message</NuxtLink>
</template>

<script setup lang="ts">
const messageStore = useMessageStore();
const messages = messageStore.messages;
</script>
