<script setup lang="ts">
const props = defineProps<{
    src: string
    alt: string
    isOpen: boolean
}>()

const emit = defineEmits<{
    close: []
}>()

const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
        emit('close')
    }
}

// 按 ESC 键关闭
const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
        emit('close')
    }
}

// 监听键盘事件
watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        document.addEventListener('keydown', handleKeydown)
        document.body.style.overflow = 'hidden'
    } else {
        document.removeEventListener('keydown', handleKeydown)
        document.body.style.overflow = ''
    }
})

// 组件卸载时清理
onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
})
</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4"
                @click="handleBackdropClick">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black bg-opacity-90"></div>

                <!-- Modal Content -->
                <div class="relative z-10 max-w-7xl max-h-[90vh] w-full">
                    <!-- Close Button -->
                    <button @click="emit('close')"
                        class="absolute -top-12 right-0 text-white text-4xl hover:text-[#cdefff] transition-colors z-20">
                        ✕
                    </button>

                    <!-- Image Container -->
                    <div class="pixel-card p-4 bg-[#133e87]">
                        <div class="border-4 border-[#2A5298] flex items-center justify-center">
                            <img :src="src" :alt="alt" class="max-w-full max-h-[80vh] w-auto h-auto object-contain" />
                        </div>
                    </div>

                    <!-- Hint Text -->
                    <p class="text-center text-[#cdefff] text-sm mt-4">
                        Click outside or press ESC to close
                    </p>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .pixel-card,
.modal-leave-active .pixel-card {
    transition: transform 0.3s ease;
}

.modal-enter-from .pixel-card,
.modal-leave-to .pixel-card {
    transform: scale(0.9);
}
</style>
