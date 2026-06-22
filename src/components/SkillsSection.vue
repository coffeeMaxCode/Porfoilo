<script setup lang="ts">
import { skills, tools, etc } from '@/data/skills'
</script>

<template>
  <section id="skills" class="section">
    <div class="section_container">
      <h1>Skills</h1>
      <p>Skills &amp; Attributes</p>

      <div class="skillset">
        <div class="skillset_left card">
          <h2 class="skillset_title uppercase">Skills</h2>
          <div v-for="skill in skills" :key="skill.name" class="skill">
            <div class="skill_description">
              <span>{{ skill.name }}</span>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="skill_bar bar">
              <div class="skill_value bar" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>

        <div class="skillset_right">
          <div class="tools card">
            <h2 class="skillset_title uppercase">Tools</h2>
            <ul>
              <li v-for="tool in tools" :key="tool">{{ tool }}</li>
            </ul>
          </div>
          <div class="etc card">
            <h2 class="skillset_title uppercase">Etc</h2>
            <ul>
              <li v-for="item in etc" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="../assets/styles/SkillsSection.css"></style>
