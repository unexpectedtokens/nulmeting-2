<template>
  <div class="w-full flex justify-center pt-5">
    <div class="flex flex-col gap-5">
      <div class="flex gap-5">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="count">Counter</NuxtLink>
        <NuxtLink to="/messages/read">Messages</NuxtLink>
        <NuxtLink to="/echo">Echo</NuxtLink>
      </div>
      <slot />
    </div>
  </div>
</template>
