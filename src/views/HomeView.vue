<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { RouteName } from '@/constants/router'
import LayoutLanding from '@/components/LayoutLanding.vue'
</script>

<template>
  <h1 class="home-title">Tour Planning</h1>
  <LayoutLanding image="/illustrations/my-current-location.svg">
    <template #text>
      <p>Hi 👋 Let‘s start by&nbsp;adding the drivers</p>
    </template>
    <template #button>
      <RouterLink :to="{ name: RouteName.DriversNew }" class="button button--primary">Add a New Driver</RouterLink>
    </template>
  </LayoutLanding>
</template>

<style lang="scss" scoped>
.home-title {
  font-size: var(--font-size-medium);
  font-weight: 400;
  line-height: 1;
  color: var(--color-text-lighter);
  letter-spacing: unset;
}
</style>
