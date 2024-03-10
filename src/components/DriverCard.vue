<script setup lang="ts">
import type { Driver } from '@/interfaces/driver'

defineProps<{ driver: Driver }>()
</script>

<template>
  <h3>{{ driver.name }}</h3>
  <div>{{ driver.location }}</div>
</template>
