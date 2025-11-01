<script setup lang="ts">
import EndlessDream from '../assets/images/EndlessDream.webp'
import NineOfSwords from '../assets/images/NineOfSwords.webp'
import DiamondSparkle from '../assets/images/DiamondSparkle.gif'

const artworks = [
    {
        id: 1,
        title: 'Endless Dream',
        image: EndlessDream,
        description: 'Explore the boundaries between dreams and reality',
        year: '2025',
        medium: 'Digital Art'
    },
    {
        id: 2,
        title: 'Nine Of Swords',
        image: NineOfSwords,
        description: 'Inner struggles and awakening of consciousness',
        year: '2025',
        medium: 'Digital Art'
    }
]

const selectedFilter = ref('all')
</script>

<template>
    <div>
        <!-- Page Header -->
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl text-white mb-6 inline-block pixel-border bg-[#133e87] px-8 py-4">
                Art Gallery
            </h1>
            <p class="text-[#cdefff] text-lg">
                {{ artworks.length }} Works in Collection
            </p>
        </div>

        <!-- Filter Bar -->
        <div class="flex justify-center gap-4 mb-12 flex-wrap">
            <button @click="selectedFilter = 'all'" class="pixel-button-container">
                <div :class="selectedFilter === 'all' ? 'bg-[#cdefff] text-[#133e87]' : 'bg-white text-[#133e87]'"
                    class="pixel-button-back px-6 py-3 text-sm">
                    All Works
                </div>
                <div :class="selectedFilter === 'all' ? 'bg-[#cdefff] text-[#133e87]' : 'bg-white text-[#133e87]'"
                    class="pixel-button-front px-6 py-3 text-sm">
                    All Works
                </div>
            </button>
            <button @click="selectedFilter = '2025'" class="pixel-button-container">
                <div :class="selectedFilter === '2025' ? 'bg-[#cdefff] text-[#133e87]' : 'bg-white text-[#133e87]'"
                    class="pixel-button-back px-6 py-3 text-sm">
                    Year 2025
                </div>
                <div :class="selectedFilter === '2025' ? 'bg-[#cdefff] text-[#133e87]' : 'bg-white text-[#133e87]'"
                    class="pixel-button-front px-6 py-3 text-sm">
                    Year 2025
                </div>
            </button>
            <button @click="selectedFilter = 'digital'" class="pixel-button-container">
                <div :class="selectedFilter === 'digital' ? 'bg-[#cdefff] text-[#133e87]' : 'bg-white text-[#133e87]'"
                    class="pixel-button-back px-6 py-3 text-sm">
                    Digital Art
                </div>
                <div :class="selectedFilter === 'digital' ? 'bg-[#cdefff] text-[#133e87]' : 'bg-white text-[#133e87]'"
                    class="pixel-button-front px-6 py-3 text-sm">
                    Digital Art
                </div>
            </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div v-for="artwork in artworks" :key="artwork.id" class="group">
                <NuxtLink :to="`/artwork/${artwork.id}`">
                    <div class="pixel-card p-4 h-full flex flex-col">
                        <!-- Image -->
                        <div class="aspect-square overflow-hidden mb-4 border-4 border-[#2A5298] relative">
                            <img :src="artwork.image" :alt="artwork.title"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                            <div
                                class="absolute inset-0 bg-[#133e87] opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                                <img :src="DiamondSparkle" alt="View" class="w-12 h-12" />
                            </div>
                        </div>

                        <!-- Info -->
                        <div class="grow">
                            <h3 class="text-white text-lg mb-2">{{ artwork.title }}</h3>
                            <p class="text-[#cdefff] text-xs mb-3 leading-relaxed">
                                {{ artwork.description }}
                            </p>
                        </div>

                        <!-- Meta -->
                        <div
                            class="flex justify-between items-center text-xs text-[#89AFFD] border-t-2 border-[#2A5298] pt-3">
                            <span>{{ artwork.year }}</span>
                            <span>{{ artwork.medium }}</span>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <!-- Empty State (if filtered) -->
        <div v-if="artworks.length === 0" class="text-center py-16">
            <p class="text-white text-xl">No works found</p>
        </div>

        <!-- Pixel Decoration -->
        <div class="mt-16 text-center">
            <div class="inline-block pixel-card px-8 py-4">
                <p class="text-[#cdefff] text-sm">
                    More works coming soon <span class="blink">...</span>
                </p>
            </div>
        </div>
    </div>
</template>
