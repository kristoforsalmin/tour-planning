<script lang="ts" setup>
import { useRouter, RouterLink } from 'vue-router'

import IconChevronLeft from '@/components/IconChevronLeft.vue'
import TourEditor from '@/components/TourEditor.vue'
import LayoutWork from '@/components/LayoutWork.vue'

import { useToursStore } from '@/stores/tours'
import { RouteName } from '@/constants/router'
import type { Tour } from '@/interfaces/tour'

const router = useRouter()
const { addTour } = useToursStore()

function saveTour(tour: Tour) {
  addTour(tour)
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
      <h1>New Tour</h1>
    </template>
    <template #content>
      <TourEditor @save="saveTour" />
    </template>
  </LayoutWork>
</template>
