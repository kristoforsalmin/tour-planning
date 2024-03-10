<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import DriverEditor from '@/components/DriverEditor.vue'
import { useDriversStore } from '@/stores/drivers'
import { RouteName } from '@/constants/router'
import type { Driver } from '@/interfaces/driver'

const router = useRouter()
const { addDriver } = useDriversStore()

function saveDriver(driver: Driver) {
  addDriver(driver)
  alert(`${driver.name} is saved`)
  router.push({ name: RouteName.Drivers })
}
</script>

<template>
  <RouterLink :to="{ name: RouteName.Drivers }">Back to list</RouterLink>
  <DriverEditor @save="saveDriver" />
</template>
