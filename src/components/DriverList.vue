<script lang="ts" setup>
import DriverCard from './DriverCard.vue'
import type { Driver } from '@/interfaces/driver'

defineProps<{ drivers: Driver[] }>()
</script>

<template>
  <ul class="drivers">
    <li v-for="driver in drivers" :key="driver.id">
      <DriverCard :driver="driver" />
    </li>
  </ul>
</template>

<style land="scss" scoped>
.drivers {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
</style>
