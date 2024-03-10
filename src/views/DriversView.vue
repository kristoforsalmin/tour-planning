<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'

import NavigationBar from '@/components/NavigationBar.vue'
import DriverList from '@/components/DriverList.vue'

import { RouteName } from '@/constants/router'
import { useDriversStore } from '@/stores/drivers'

const { drivers, anyDrivers } = storeToRefs(useDriversStore())
</script>

<template>
  <NavigationBar />
  <h1>Available Drivers</h1>
  <div v-if="anyDrivers">
    <DriverList :drivers="drivers" />
    <p>
      Didn’t find your favourite?
      <RouterLink :to="{ name: RouteName.DriversNew }">Register a new driver</RouterLink>
    </p>
  </div>
  <div v-else>
    <p>
      No registered drivers found, sadly.
      <RouterLink :to="{ name: RouteName.DriversNew }">Register a new driver</RouterLink>
    </p>
  </div>
</template>
