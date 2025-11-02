<script setup lang="ts">
import JumpingGrassBlock from '../assets/images/JumpingGrassBlock.gif'
</script>

<template>
    <div class="min-h-screen">
        <!-- Header -->
        <header class="border-b-4 border-[#2A5298] bg-[#5371ad]">
            <nav class="container mx-auto px-4 py-6">
                <div class="flex items-center justify-between">
                    <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div class="w-12 h-12 flex items-center justify-center overflow-hidden">
                            <img :src="JumpingGrassBlock" alt="Logo" class="w-full h-full object-cover" />
                        </div>
                        <h1 class="text-xl md:text-2xl text-white">McRenders</h1>
                    </NuxtLink>

                    <div class="flex gap-4">
                        <NuxtLink to="/" class="pixel-button-container">
                            <div class="pixel-button-back bg-[#cdefff] px-6 py-3 text-sm text-[#133e87]">
                                Home
                            </div>
                            <div class="pixel-button-front bg-[#cdefff] px-6 py-3 text-sm text-[#133e87]">
                                Home
                            </div>
                        </NuxtLink>

                        <NuxtLink to="/gallery" class="pixel-button-container">
                            <div class="pixel-button-back bg-[#608BC1] px-6 py-3 text-sm text-white">
                                Gallery
                            </div>
                            <div class="pixel-button-front bg-[#608BC1] px-6 py-3 text-sm text-white">
                                Gallery
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-8">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="border-t-4 border-[#2A5298] bg-[#133e87] text-white py-8 mt-16">
            <div class="container mx-auto px-4 text-center">
                <p class="text-sm mb-4">🎮 MC Art Gallery 🎮</p>
                <p class="text-xs opacity-75">© 2025 McRenders. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
/* 额外的像素风格样式 */
</style>
