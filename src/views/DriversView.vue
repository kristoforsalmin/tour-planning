<script lang="ts" setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'

import DriverList from '@/components/DriverList.vue'
import LayoutLanding from '@/components/LayoutLanding.vue'
import LayoutWork from '@/components/LayoutWork.vue'
import NavigationBar from '@/components/NavigationBar.vue'

import { useDriversStore } from '@/stores/drivers'
import { useToursStore } from '@/stores/tours'
import { RouteName } from '@/constants/router'

import illustration from '@/assets/illustrations/delivery-truck.svg'

const { drivers, anyDrivers } = storeToRefs(useDriversStore())
const { tours } = storeToRefs(useToursStore())

const learning = computed(() => drivers.value.length === 1 && tours.value.length === 0)
</script>

<template>
  <NavigationBar />

  <LayoutWork v-if="anyDrivers">
    <template #title>
      <h1>Available Drivers</h1>
      <RouterLink :to="{ name: RouteName.DriversNew }" class="button button--primary">Add Driver</RouterLink>
    </template>
    <template #content>
      <DriverList :drivers="drivers" />
    </template>
    <template v-if="learning" #footer>
      <p>Now let’s plan a&nbsp;tour 👇</p>
      <RouterLink :to="{ name: RouteName.ToursNew }" class="button button--primary">Plan a New Tour</RouterLink>
    </template>
  </LayoutWork>

  <LayoutLanding v-else :image="illustration">
    <template #text>
      <p>No&nbsp;drivers added so&nbsp;far</p>
    </template>
    <template #button>
      <RouterLink :to="{ name: RouteName.DriversNew }" class="button button--primary">Add a New Driver</RouterLink>
    </template>
  </LayoutLanding>
</template>
