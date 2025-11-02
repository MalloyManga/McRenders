<script setup lang="ts">
import EndlessDream from '../assets/images/EndlessDream.webp'
import NineOfSwords from '../assets/images/NineOfSwords.webp'

const artworks = [
    {
        id: 1,
        title: 'Endless Dream',
        image: EndlessDream,
        description: 'Explore the boundaries between dreams and reality',
        color: 'from-blue-500 to-purple-600'
    },
    {
        id: 2,
        title: 'Nine Of Swords',
        image: NineOfSwords,
        description: 'Inner struggles and awakening of consciousness',
        color: 'from-red-500 to-pink-600'
    }
]
</script>

<template>
    <div>
        <!-- Hero Section -->
        <section class="text-center py-16 mb-12">
            <div class="inline-block mb-8">
                <h1 class="text-4xl md:text-6xl text-white mb-4 pixel-border bg-[#133e87] px-8 py-6">
                    MC Art Gallery
                </h1>
            </div>
            <p class="text-[#cdefff] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Welcome to McRenders Pixel World
                <br />
                <span class="blink">▼</span>
            </p>
        </section>

        <!-- Featured Artworks -->
        <section class="mb-16">
            <h2 class="text-3xl text-white text-center mb-12 flex items-center justify-center gap-4">
                <span>★</span>
                <span>Featured Works</span>
                <span>★</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div v-for="artwork in artworks" :key="artwork.id" class="pixel-card p-4 cursor-pointer">
                    <div class="aspect-square overflow-hidden mb-4 border-4 border-[#2A5298]">
                        <img :src="artwork.image" :alt="artwork.title"
                            class="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 class="text-white text-xl mb-3">{{ artwork.title }}</h3>
                    <p class="text-[#cdefff] text-sm leading-relaxed mb-4">
                        {{ artwork.description }}
                    </p>
                    <NuxtLink :to="`/artwork/${artwork.id}`" class="pixel-button-container">
                        <div class="pixel-button-back bg-[#cdefff] px-6 py-3 text-sm text-[#133e87]">
                            View Details →
                        </div>
                        <div class="pixel-button-front bg-[#cdefff] px-6 py-3 text-sm text-[#133e87]">
                            View Details →
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="text-center py-16">
            <div class="max-w-3xl mx-auto">
                <div class="pixel-card p-8">
                    <h2 class="text-3xl text-white mb-4">Explore More Works</h2>
                    <p class="text-[#cdefff] text-sm mb-6 leading-relaxed">
                        Discover unique pixel art creations
                    </p>
                    <NuxtLink to="/gallery" class="pixel-button-container">
                        <div class="pixel-button-back bg-[#cdefff] px-8 py-4 text-[#133e87]">
                            Enter Gallery 🎨
                        </div>
                        <div class="pixel-button-front bg-[#cdefff] px-8 py-4 text-[#133e87]">
                            Enter Gallery 🎨
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
</style>
