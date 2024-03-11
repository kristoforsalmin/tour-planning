<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'

import LayoutLanding from '@/components/LayoutLanding.vue'
import LayoutWork from '@/components/LayoutWork.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import TourList from '@/components/TourList.vue'

import { useToursStore } from '@/stores/tours'
import { RouteName } from '@/constants/router'
import type { Tour } from '@/interfaces/tour'

const store = useToursStore()
const { tours, anyTours } = storeToRefs(store)
const { removeTourById } = store

function removeTour(tour: Tour) {
  if (confirm('Do you really want to remove this tour?')) removeTourById(tour.id)
}
</script>

<template>
  <NavigationBar />

  <LayoutWork v-if="anyTours">
    <template #title>
      <h1>Planned Tours</h1>
      <RouterLink :to="{ name: RouteName.ToursNew }" class="button button--primary">Add Tour</RouterLink>
    </template>
    <template #content>
      <TourList :tours="tours" @remove="removeTour" />
    </template>
  </LayoutWork>

  <LayoutLanding v-else image="/illustrations/destination.svg">
    <template #text>
      <p>No&nbsp;tours have been created so&nbsp;far</p>
    </template>
    <template #button>
      <RouterLink :to="{ name: RouteName.ToursNew }" class="button button--primary">Start Planning</RouterLink>
    </template>
  </LayoutLanding>
</template>
