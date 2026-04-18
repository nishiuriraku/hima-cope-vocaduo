<template>
  <div class="flex flex-col items-center group cursor-pointer">
    <NuxtLink :to="link" target="_blank">
      <!-- Image Container with Hover Animation -->
      <div
        class="relative w-[200px] h-[200px] rounded-xl overflow-hidden shadow-sm transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-xl"
      >
        <!-- Member Image -->
        <img
          :src="image"
          :alt="name"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <!-- Color Overlay -->
        <div
          class="absolute inset-0 transition-opacity duration-500"
          :style="{ backgroundColor: overlayColor, opacity: overlayOpacity }"
        ></div>
        <!-- Additional Hover Glow / Glass Effect -->
        <div
          class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 mix-blend-overlay"
        ></div>
      </div>

      <!-- Text Content -->
      <div
        class="mt-6 text-center transition-transform duration-500 group-hover:-translate-y-1"
      >
        <p class="text-sm font-semibold tracking-wider text-[#8C8C8C] mb-1">
          {{ role }}
        </p>
        <h3 class="text-lg font-bold text-[#1A1A1A]">{{ name }}</h3>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'https://placehold.jp/150x150.png',
  },
  link: {
    type: String,
    default: '',
  },
  overlayColor: {
    type: String,
    default: 'transparent',
  },
  overlayOpacity: {
    type: Number,
    default: 0.2,
  },
});
</script>
