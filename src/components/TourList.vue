<script setup lang="ts">
import TourCard from './TourCard.vue'
import type { Tour } from '@/interfaces/tour'

defineProps<{ tours: Tour[] }>()
</script>

<template>
  <ul>
    <li v-for="tour in tours" :key="tour.id">
      <TourCard :tour="tour" v-bind="$attrs" />
    </li>
  </ul>
</template>
