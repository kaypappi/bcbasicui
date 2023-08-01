<template>
  <div>
    <Button
      class=""
      icon="pi pi-check"
      unstyled
      :pt="{
        root: {
          class: 'flex ',
        },
      }"
      >yfk</Button
    >
    <div class="flex flex-col gap-1">
      <label for="username" class="font-medium text-grey">Username</label>
      <InputText
        id="username"
        v-model="value"
        aria-describedby="username-help"
        class="active:ring-0 active:outline-0 focus-within:outline-0"
      />
    </div>
    <slot />
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
</script>
