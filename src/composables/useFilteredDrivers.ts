import { ref, type Ref } from 'vue'
import useFilteredArray from '@/composables/useFilteredArray'
import type { Driver } from '@/interfaces/driver'

export default function useFilteredDrivers(drivers: Ref<Driver[]>) {
  const criteria = ref({
    location: ''
  })

  const predicates = [
    (driver: Driver) => criteria.value.location.length === 0 || driver.location === criteria.value.location
  ]

  const { filteredArray: filteredDrivers } = useFilteredArray<Driver>(drivers, predicates)

  function filterDriversByLocation(location: string) {
    criteria.value.location = location
  }

  return {
    filteredDrivers,
    filterDriversByLocation
  }
}
