<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import TourEditor from '@/components/TourEditor.vue'
import { useToursStore } from '@/stores/tours'
import { RouteName } from '@/constants/router'
import type { Tour } from '@/interfaces/tour'

const router = useRouter()
const { addTour } = useToursStore()

function saveTour(tour: Tour) {
  addTour(tour)
  alert(`${tour.customer}’s tour is saved`)
  router.push({ name: RouteName.Tours })
}
</script>

<template>
  <RouterLink :to="{ name: RouteName.Tours }">Back to list</RouterLink>
  <TourEditor @save="saveTour" />
</template>
