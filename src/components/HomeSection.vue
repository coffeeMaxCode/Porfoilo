<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { asset } from '@/utils/asset'

const container = ref<HTMLElement | null>(null)
const opacity = ref(1)
let homeHeight = 1

function onScroll() {
  opacity.value = Math.max(0, 1 - window.scrollY / homeHeight)
}

onMounted(() => {
  homeHeight = container.value?.getBoundingClientRect().height ?? 1
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <section
    id="home"
    :style="{ backgroundImage: `url(${asset('src/assets/imgs/home-background.png')})` }"
  >
    <div ref="container" class="home_container" :style="{ opacity }">
      <img class="home_avatar" :src="asset('src/assets/imgs/profile.jpg')" alt="Kim Hyuntae" />
      <p class="home_eyebrow uppercase">Portfolio</p>
      <h1 class="home_title">Hello, I'm <span>Kim Hyuntae</span></h1>
      <p class="home_description">Software Engineer · PM / PL</p>
      <div class="home_actions">
        <a class="home_btn home_btn--primary transition" href="#contact">Contact Me</a>
        <a class="home_btn home_btn--ghost transition" href="#work">View Work</a>
      </div>
    </div>
  </section>
</template>

<style scoped src="../assets/styles/HomeSection.css"></style>
