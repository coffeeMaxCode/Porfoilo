<script setup lang="ts">
import { computed, ref } from 'vue'
import { portfolioData, categoryFilters } from '@/data/portfolio'
import type { CategoryFilter, ProjectCategory, UnifiedProject } from '@/data/types'
import { asset } from '@/utils/asset'

type Filter = ProjectCategory | '*'

const selected = ref<Filter>('*')
const animating = ref(false)

const workHistory = computed(() =>
  portfolioData.filter((p) => !p.categories.includes('session')),
)

function isVisible(project: UnifiedProject): boolean {
  return selected.value === '*' || project.categories.includes(selected.value)
}

function countFor(value: Filter): number {
  return value === '*'
    ? portfolioData.length
    : portfolioData.filter((p) => p.categories.includes(value)).length
}

function cardLines(p: UnifiedProject): string[] {
  return [p.client, p.period, p.role, p.language]
    .filter((line): line is string => Boolean(line))
    .map((line) => line.replace(/\n/g, ' '))
}

function selectFilter(filter: CategoryFilter) {
  if (filter.value === selected.value) return
  animating.value = true
  window.setTimeout(() => {
    selected.value = filter.value
    animating.value = false
  }, 300)
}
</script>

<template>
  <section id="work" class="section">
    <div class="section_container">
      <h1>My work</h1>
      <p>Projects</p>

      <div class="work_categories">
        <button
          v-for="filter in categoryFilters"
          :key="filter.value"
          class="category_btn transition"
          :class="{ selected: selected === filter.value }"
          @click="selectFilter(filter)"
        >
          {{ filter.label }}
          <span class="category_count">{{ countFor(filter.value) }}</span>
        </button>
      </div>

      <div class="work_projects" :class="{ 'anim-out': animating }">
        <component
          :is="project.href ? 'a' : 'div'"
          v-for="project in portfolioData"
          :key="project.title"
          class="project lift"
          :class="{ invisible: !isVisible(project) }"
          :href="project.href || undefined"
          :target="project.href ? '_blank' : undefined"
          :rel="project.href ? 'noopener noreferrer' : undefined"
        >
          <img class="project_img" :src="asset(project.image)" :alt="project.title" />
          <div class="project_description">
            <h3 class="project_title">{{ project.title }}</h3>
            <span v-for="(line, i) in cardLines(project)" :key="i">{{ line }}</span>
          </div>
        </component>
      </div>

      <div class="work_history">
        <table class="history_table">
          <thead>
            <tr>
              <th class="col-project">프로젝트</th>
              <th class="col-period">기간</th>
              <th class="col-client">고객사</th>
              <th class="col-company">회사</th>
              <th class="col-role">역할</th>
              <th class="col-os">OS</th>
              <th class="col-language">개발언어</th>
              <th class="col-dbms">DBMS</th>
              <th class="col-tool">Tool</th>
              <th class="col-etc">기타</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in workHistory" :key="row.title">
              <td class="col-project">{{ row.title }}</td>
              <td>{{ row.period }}</td>
              <td class="col-client">{{ row.client }}</td>
              <td class="col-company">{{ row.company }}</td>
              <td class="col-role">{{ row.role }}</td>
              <td>{{ row.os }}</td>
              <td>{{ row.language }}</td>
              <td>{{ row.dbms }}</td>
              <td>{{ row.tool }}</td>
              <td>{{ row.etc }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped src="../assets/styles/WorkSection.css"></style>
