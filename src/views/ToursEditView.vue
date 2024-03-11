<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'

import IconChevronLeft from '@/components/IconChevronLeft.vue'
import TourEditor from '@/components/TourEditor.vue'
import LayoutWork from '@/components/LayoutWork.vue'

import { useToursStore } from '@/stores/tours'
import { RouteName } from '@/constants/router'
import type { Tour } from '@/interfaces/tour'

const router = useRouter()
const route = useRoute()
const { getTourById, updateTour } = useToursStore()
const tourId = ref(route.params.id as string)

function update(tour: Tour) {
  updateTour(tour)
  router.push({ name: RouteName.Tours })
}
</script>

<template>
  <RouterLink :to="{ name: RouteName.Tours }" class="link text-with-icon">
    <IconChevronLeft />
    All Tours
  </RouterLink>

  <LayoutWork>
    <template #title>
      <h1>Edit Tour</h1>
    </template>
    <template #content>
      <TourEditor :tour="getTourById(tourId)" @save="update" />
    </template>
  </LayoutWork>
</template>
