import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Driver } from '@/interfaces/driver'

export const useDriversStore = defineStore('drivers', () => {
  const drivers: Ref<Driver[]> = ref([])

  const anyDrivers = computed(() => drivers.value.length > 0)

  const driverLocations = computed(() => drivers.value.map(driver => driver.location))

  function addDriver(driver: Driver) {
    drivers.value.push(driver)
  }

  function getDriverById(id: string) {
    return drivers.value.find(driver => driver.id === id)
  }

  return {
    drivers,
    anyDrivers,
    driverLocations,
    addDriver,
    getDriverById
  }
})
