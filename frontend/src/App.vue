<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="mx-auto container grid grid-cols-5 gap-x-4">
    <header class="col-span-5 p-4 pl-0">
      <nav>
        <RouterLink class="font-bold" to="/">Home</RouterLink>
        <span> / </span>
        <span class="capitalize text-secondary-text">{{ $route.name }}</span>
      </nav>
    </header>
    <RouterView />
  </div>
  <notifications position="bottom right">
  <template #body="props">
    <div class="m-4 p-4 border-b border-b-secondary-text bg-box-background">
        {{ props.item.text }}
    </div>
  </template>
</notifications>
</template>
