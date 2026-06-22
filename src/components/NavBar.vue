<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { navItems } from '@/data/navigation'

const navbar = ref<HTMLElement | null>(null)
const isDark = ref(false)
const isOpen = ref(false)
let navbarHeight = 0

function onScroll() {
  isDark.value = window.scrollY > navbarHeight
}

function closeMenu() {
  isOpen.value = false
}

onMounted(() => {
  navbarHeight = navbar.value?.getBoundingClientRect().height ?? 0
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav id="navbar" ref="navbar" :class="{ 'navbar--dark': isDark }">
    <a class="navbar_logo" href="#home">Hyuntae</a>
    <ul class="navbar_menu" :class="{ open: isOpen }">
      <li v-for="item in navItems" :key="item.href">
        <a class="navbar_menu_item transition" :href="item.href" @click="closeMenu">{{ item.label }}</a>
      </li>
    </ul>
    <button class="navbar_toggle-btn" aria-label="Toggle menu" @click="isOpen = !isOpen">
      <i class="fas fa-bars"></i>
    </button>
  </nav>
</template>

<style scoped src="../assets/styles/NavBar.css"></style>
