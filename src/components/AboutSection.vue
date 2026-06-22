<script setup lang="ts">
import { majors } from '@/data/majors'
import { jobs } from '@/data/jobs'
import { asset } from '@/utils/asset'
</script>

<template>
  <section id="about" class="section">
    <div class="section_container">
      <h1>About me</h1>
      <p>
        Software engineer with PM / PL experience across Vue, React and Java
        back-end projects.
      </p>

      <div class="about_majors">
        <div v-for="major in majors" :key="major.title" class="major card lift transition">
          <div class="major_icon">
            <i :class="[major.icon, 'transition']"></i>
          </div>
          <h2 class="major_title">{{ major.title }}</h2>
          <p class="major_description">{{ major.description }}</p>
        </div>
      </div>

      <div class="jobs">
        <div v-for="job in jobs" :key="job.name" class="job">
          <img class="job_logo" :src="asset(job.logo)" />
          <div class="job_description">
            <p class="job_name">{{ job.name }}</p>
            <p class="job_period">{{ job.period }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="../assets/styles/AboutSection.css"></style>
