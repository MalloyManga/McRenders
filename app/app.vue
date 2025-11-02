<script setup lang="ts">
useHead({
  title: 'McRenders - MC Art Gallery',
  meta: [
    { name: 'description', content: 'Explore unique pixel art creations' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-[#133e87] via-[#2A5298] to-[#3A4F7F]">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
