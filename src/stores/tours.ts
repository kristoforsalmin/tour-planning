import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Tour } from '@/interfaces/tour'

export const useToursStore = defineStore('tours', () => {
  const tours: Ref<Tour[]> = ref([])

  const anyTours = computed(() => tours.value.length > 0)

  function addTour(tour: Tour) {
    tours.value.push(tour)
  }

  function getTourById(id: string) {
    return tours.value.find(tour => tour.id === id)
  }

  function updateTour(tour: Tour) {
    const index = getTourIndexById(tour.id)

    if (index < 0) return false

    tours.value[index] = tour

    return true
  }

  function removeTourById(id: string) {
    const index = getTourIndexById(id)

    if (index < 0) return false

    tours.value.splice(index, 1)

    return true
  }

  function getTourIndexById(id: string) {
    return tours.value.findIndex(tour => tour.id === id)
  }

  return {
    tours,
    anyTours,
    addTour,
    getTourById,
    updateTour,
    removeTourById
  }
})
