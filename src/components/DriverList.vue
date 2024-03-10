<script setup lang="ts">
import DriverCard from './DriverCard.vue'
import type { Driver } from '@/interfaces/driver'

defineProps<{ drivers: Driver[] }>()
</script>

<template>
  <ul>
    <li v-for="driver in drivers" :key="driver.id">
      <DriverCard :driver="driver" />
    </li>
  </ul>
</template>
