<script lang="ts" setup>
import TourCard from './TourCard.vue'
import type { Tour } from '@/interfaces/tour'

defineProps<{ tours: Tour[] }>()
</script>

<template>
  <ul class="tours">
    <li v-for="tour in tours" :key="tour.id">
      <TourCard :tour="tour" v-bind="$attrs" />
    </li>
  </ul>
</template>

<style land="scss" scoped>
.tours {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
</style>
