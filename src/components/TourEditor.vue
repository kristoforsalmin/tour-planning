<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useDriversStore } from '@/stores/drivers'
import useFilteredDrivers from '@/composables/useFilteredDrivers'
import type { Tour } from '@/interfaces/tour'

import createId from '@/utilities/createId'
import formatDateForMachines from '@/utilities/formatDateForMachines'

const props = defineProps<{ tour?: Tour }>()
const emit = defineEmits<{ save: [tour: Tour] }>()

const { drivers, driverLocations } = storeToRefs(useDriversStore())
const { filteredDrivers, filterDriversByLocation } = useFilteredDrivers(drivers)

const today = formatDateForMachines(new Date())

const newTour: Ref<Tour> = ref({
  id: createId(),
  customer: '',
  date: today,
  originLocation: '',
  destinationLocation: '',
  driver: '',
  ...props.tour
})

const editing = computed(() => Boolean(props.tour))

filterDriversByLocation(newTour.value.originLocation)
</script>

<template>
  <h1>
    <span v-if="editing">Edit</span>
    <span v-else>Create</span>
    Tour
  </h1>
  <form @submit.prevent="emit('save', newTour)">
    <label>
      Customer
      <input
        type="text"
        v-model.trim="newTour.customer"
        required
      >
    </label>
    <label>
      Date
      <input
        type="date"
        v-model="newTour.date"
        :min="today"
        required
      >
    </label>
    <label>
      From
      <input
        type="text"
        list="locations"
        pattern="[A-Za-z\s]+"
        v-model.trim="newTour.originLocation"
        @input="filterDriversByLocation(newTour.originLocation)"
        required
      >
    </label>
    <datalist id="locations">
      <option
        v-for="location in driverLocations"
        :key="location"
        :value="location"
      ></option>
    </datalist>
    <label>
      To
      <input
        type="text"
        pattern="[A-Za-z\s]+"
        v-model.trim="newTour.destinationLocation"
        required
      >
    </label>
    <label>
      Driver
      <select
        v-model="newTour.driver"
        :disabled="newTour.originLocation.length === 0 || filteredDrivers.length === 0"
        required
      >
        <option value="">Choose a driver</option>
        <option
          v-for="driver in filteredDrivers"
          :key="driver.id"
          :value="driver.name"
        >
          {{ driver.name }}
        </option>
      </select>
    </label>
    <button :disabled="newTour.driver.length === 0">
      <span v-if="editing">Save Tour</span>
      <span v-else>Create Tour</span>
    </button>
  </form>
</template>
