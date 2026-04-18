<template>
  <div
    class="min-h-screen relative overflow-hidden bg-white text-[#1A1A1A] flex flex-col font-['Outfit',_sans-serif]"
  >
    <DecorativeCircle />

    <div
      class="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex-1 flex flex-col pb-8"
    >
      <!-- Header -->
      <AppHeader />

      <!-- Main Content -->
      <main
        class="flex-1 flex flex-col items-center justify-center mt-12 sm:mt-24 w-full"
      >
        <!-- Hero Title -->
        <section class="text-center mb-16 sm:mb-24 flex flex-col items-center">
          <!-- Japanese Title -->
          <h1
            class="text-3xl sm:text-5xl md:text-6xl font-medium tracking-widest text-[#1A1A1A] mb-4"
            style="font-family: 'Noto Serif JP', sans-serif"
          >
            ひまわりコッペパン
          </h1>
          <!-- English Subtitle -->
          <h2
            class="text-sm sm:text-lg tracking-[0.6em] sm:tracking-[1em] text-[#8C8C8C] font-light"
          >
            HIMAWARI KOPPEPAN
          </h2>
        </section>

        <!-- Divider with Circle -->
        <div
          class="flex items-center justify-center w-full max-w-lg mb-16 sm:mb-24"
        >
          <div class="h-px bg-[#1A1A1A] flex-1"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-[#E8B82E] mx-4"></div>
          <div class="h-px bg-[#1A1A1A] flex-1"></div>
        </div>

        <!-- Team Grid -->
        <section class="w-full">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 justify-items-center"
          >
            <TeamCard
              name="ハムチ"
              role="Vocal"
              :image="hamuchi"
              link="https://x.com/hamutima_86"
              overlayColor="#FFDAA7"
              :overlayOpacity="0.2"
            />

            <TeamCard
              name="春遠"
              role="Music"
              :image="harumichi"
              link="https://x.com/harumichi_oto"
              overlayColor="#E0D9EB"
              :overlayOpacity="0.6"
            />

            <TeamCard
              name="無ナ"
              role="Illust"
              :image="nana"
              link="https://x.com/nanancha_"
              overlayColor="#FFB1F7"
              :overlayOpacity="0.2"
            />

            <TeamCard
              name="にしうりらく"
              role="Mix"
              :image="nishiuri"
              link="https://x.com/nishiuriraku"
              overlayColor="#D9EBD9"
              :overlayOpacity="0.3"
            />
          </div>
        </section>
      </main>

      <!-- Footer -->
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import DecorativeCircle from './components/DecorativeCircle.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import TeamCard from './components/TeamCard.vue';

import hamuchi from './assets/image/hamuchi_400x400.jpg';
import harumichi from './assets/image/harumichi_400x400.jpg';
import nana from './assets/image/nana_400x400.jpg';
import nishiuri from './assets/image/nishiuri_400x400.jpg';

// Basic setup
useHead({
  title: 'HIMAWARI KOPPEPAN - VOCADUO 2026',
  meta: [
    {
      name: 'description',
      content: 'Team Introduction for HIMAWARI KOPPEPAN - VOCADUO 2026',
    },
  ],
});
</script>
