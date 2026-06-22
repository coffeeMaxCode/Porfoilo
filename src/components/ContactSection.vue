<script setup lang="ts">
const socials = [
  { icon: 'fab fa-github', href: '#', label: 'GitHub' },
  { icon: 'fab fa-linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'fas fa-envelope', href: '#', label: 'Email' },
]
</script>

<template>
  <section id="contact" class="section">
    <h1 class="contact_title">Let's talk</h1>
    <h2 class="contact_email">contact@example.com</h2>
    <div class="contact_links">
      <a
        v-for="social in socials"
        :key="social.label"
        :href="social.href"
        :aria-label="social.label"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i :class="social.icon"></i>
      </a>
    </div>
    <p class="contact_rights">© Kim Hyuntae - All rights reserved</p>
  </section>
</template>

<style scoped src="../assets/styles/ContactSection.css"></style>
