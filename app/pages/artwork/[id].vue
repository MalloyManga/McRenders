<script setup lang="ts">
import EndlessDream from '../../assets/images/EndlessDream.webp'
import NineOfSwords from '../../assets/images/NineOfSwords.webp'
import Irongolem from '../../assets/images/Irongolem.gif'
const route = useRoute()
const artworkId = computed(() => route.params.id)

const artworks = {
    '1': {
        id: 1,
        title: 'Endless Dream',
        image: EndlessDream,
        description: 'Explore the boundaries between dreams and reality',
        fullDescription: 'This artwork explores the blurred boundaries between dreams and reality. Through pixelated representation, the artist creates a visual world that is both familiar and strange, inviting viewers to deeply contemplate the nature of consciousness.',
        year: '2025',
        medium: 'Digital Art',
        dimensions: '3840 x 2160 px',
        tags: ['Dream', 'Surreal', 'Consciousness']
    },
    '2': {
        id: 2,
        title: 'Nine Of Swords',
        image: NineOfSwords,
        description: 'Inner struggles and awakening of consciousness',
        fullDescription: 'Inspired by the Nine of Swords tarot card, this artwork depicts inner anxiety and struggle. The nine swords symbolize the complexity of thoughts, while the pixel style gives the work a unique retro-futuristic feel.',
        year: '2025',
        medium: 'Digital Art',
        dimensions: '3840 x 2160 px',
        tags: ['Tarot', 'Psychology', 'Symbolism']
    }
}

const artwork = computed(() => artworks[artworkId.value as keyof typeof artworks])

// 如果作品不存在，跳转回画廊
if (!artwork.value) {
    navigateTo('/gallery')
}
</script>

<template>
    <div v-if="artwork" class="max-w-6xl mx-auto">
        <!-- Back Button -->
        <div class="mb-8">
            <NuxtLink to="/gallery" class="pixel-button-container inline-flex">
                <div class="pixel-button-back bg-[#cdefff] px-6 py-3 text-sm text-[#133e87] flex items-center gap-2">
                    <span>←</span>
                    <span>Back to Gallery</span>
                </div>
                <div class="pixel-button-front bg-[#cdefff] px-6 py-3 text-sm text-[#133e87] flex items-center gap-2">
                    <span>←</span>
                    <span>Back to Gallery</span>
                </div>
            </NuxtLink>
        </div>

        <!-- Artwork Detail -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Image -->
            <div class="pixel-card p-4">
                <div class="border-4 border-[#2A5298] overflow-hidden">
                    <img :src="artwork.image" :alt="artwork.title" class="w-full h-auto" />
                </div>
            </div>

            <!-- Info -->
            <div class="space-y-6">
                <!-- Title -->
                <div class="pixel-card px-6 py-4">
                    <h1 class="text-3xl md:text-4xl text-white mb-2">{{ artwork.title }}</h1>
                    <p class="text-[#cdefff] text-sm">{{ artwork.year }}</p>
                </div>

                <!-- Description -->
                <div class="pixel-card px-6 py-6">
                    <h2 class="text-[#cdefff] text-xl mb-3">About This Work</h2>
                    <p class="text-white text-sm leading-relaxed">
                        {{ artwork.fullDescription }}
                    </p>
                </div>

                <!-- Details -->
                <div class="pixel-card px-6 py-6">
                    <h2 class="text-[#cdefff] text-xl mb-4">Artwork Details</h2>
                    <div class="space-y-3 text-sm">
                        <div class="flex justify-between border-b border-[#2A5298] pb-2">
                            <span class="text-[#89AFFD]">Year</span>
                            <span class="text-white">{{ artwork.year }}</span>
                        </div>
                        <div class="flex justify-between border-b border-[#2A5298] pb-2">
                            <span class="text-[#89AFFD]">Medium</span>
                            <span class="text-white">{{ artwork.medium }}</span>
                        </div>
                        <div class="flex justify-between border-b border-[#2A5298] pb-2">
                            <span class="text-[#89AFFD]">Dimensions</span>
                            <span class="text-white">{{ artwork.dimensions }}</span>
                        </div>
                    </div>
                </div>

                <!-- Tags -->
                <div class="bg-[#cdefff] px-6 py-4 border-4 border-[#2A5298]">
                    <h2 class="text-[#133e87] text-xl mb-3">Tags</h2>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tag in artwork.tags" :key="tag" class="pixel-tag text-white px-4 py-2 text-xs">
                            #{{ tag }}
                        </span>
                    </div>
                </div>

                <!-- Share -->
                <div class="text-center">
                    <button class="pixel-button-container w-full">
                        <div class="pixel-button-back bg-[#608BC1] px-8 py-4 text-white w-full flex items-center justify-center gap-2">
                            <span>Share Artwork</span>
                            <img :src="Irongolem" alt="Share" class="w-6 h-6 inline-block" />
                        </div>
                        <div class="pixel-button-front bg-[#608BC1] px-8 py-4 text-white w-full flex items-center justify-center gap-2">
                            <span>Share Artwork</span>
                            <img :src="Irongolem" alt="Share" class="w-6 h-6 inline-block" />
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- Related Works -->
        <div class="mt-16">
            <h2 class="text-3xl text-white text-center mb-8 flex items-center justify-center gap-4">
                <span>★</span>
                <span>More Works</span>
                <span>★</span>
            </h2>
            <div class="text-center">
                <NuxtLink to="/gallery" class="pixel-button-container">
                    <div class="pixel-button-back bg-[#cdefff] px-8 py-4 text-[#133e87]">
                        Browse Gallery →
                    </div>
                    <div class="pixel-button-front bg-[#cdefff] px-8 py-4 text-[#133e87]">
                        Browse Gallery →
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
