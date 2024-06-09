<template>
  <form class="flex flex-col" @submit.prevent="triggerEcho">
    <label for="name"> Full name: </label>
    <input id="name" name="name" type="text" v-model="name" required />

    <label for="email"> Email address: </label>
    <input id="email" name="email" type="email" v-model="email" required />
    <label for="age"> Age: </label>
    <input id="age" name="age" type="number" min="0" v-model="age" required />
    <button type="submit">Echo server</button>
  </form>

  <div>
    <pre>{{ echoResponse }}</pre>
  </div>
</template>

<script setup lang="ts">
const email = ref("");
const name = ref("");
const age = ref(0);

const echoStore = useEchoStore();

const echoResponse = computed(() => {
  if (echoStore.echoResponse === null) {
    return "you need to dispatch a request before you can see a response here";
  }

  return JSON.stringify(echoStore.echoResponse, null, 2);
});

const triggerEcho = async () => {
  await echoStore.populateEchoResponse({
    name: name.value,
    email: email.value,
    age: age.value,
  });
};
</script>
