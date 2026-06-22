<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import WorkSection from './components/WorkSection.vue'
import ContactSection from './components/ContactSection.vue'
import ArrowUp from './components/ArrowUp.vue'
</script>

<template>
  <NavBar />
  <main>
    <HomeSection />
    <AboutSection />
    <WorkSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <ArrowUp />
</template>
