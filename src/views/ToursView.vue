<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'

import NavigationBar from '@/components/NavigationBar.vue'
import TourList from '@/components/TourList.vue'

import { useToursStore } from '@/stores/tours'
import { RouteName } from '@/constants/router'
import type { Tour } from '@/interfaces/tour'

const store = useToursStore()
const { tours, anyTours } = storeToRefs(store)
const { removeTourById } = store

function removeTour(tour: Tour) {
  const removed = removeTourById(tour.id)
  alert(removed ? 'Tour was removed' : 'Tour wasn’t removed')
}
</script>

<template>
  <NavigationBar />
  <h1>Available Tours</h1>
  <div v-if="anyTours">
    <RouterLink :to="{ name: RouteName.ToursNew }">Create a new tour</RouterLink>
    <TourList :tours="tours" @remove="removeTour" />
  </div>
  <div v-else>
    <p>
      No tours yet.
      <RouterLink :to="{ name: RouteName.ToursNew }">Create a first one</RouterLink>
    </p>
  </div>
</template>
