<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'

import TourEditor from '@/components/TourEditor.vue'

import { useToursStore } from '@/stores/tours'
import { RouteName } from '@/constants/router'
import type { Tour } from '@/interfaces/tour'

const router = useRouter()
const route = useRoute()
const tourId = ref(route.params.id as string)
const { getTourById, updateTour } = useToursStore()

function update(tour: Tour) {
  const updated = updateTour(tour)
  alert(updated ? 'Tour was updated' : 'Tour wasn’t updated')
  router.push({ name: RouteName.Tours })
}
</script>

<template>
  <RouterLink :to="{ name: RouteName.Tours }">Back to list</RouterLink>
  <TourEditor :tour="getTourById(tourId)" @save="update" />
</template>
