<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > window.innerHeight / 2
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <a href="#home" class="arrow-up" :class="{ visible }" aria-label="Scroll to top">
    <i class="fas fa-angle-up"></i>
  </a>
</template>

<style scoped src="../assets/styles/ArrowUp.css"></style>
