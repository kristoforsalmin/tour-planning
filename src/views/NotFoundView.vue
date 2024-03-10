<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { RouteName } from '@/constants/router'
</script>

<template>
  <h1>Not Found</h1>
  <p>Back to <RouterLink :to="{ name: RouteName.Home }">home</RouterLink></p>
</template>
