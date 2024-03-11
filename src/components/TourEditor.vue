<script lang="ts" setup>
import { ref, computed, type Ref } from 'vue'
import { storeToRefs } from 'pinia'

import IconExclamationCircle from './IconExclamationCircle.vue'

import { useDriversStore } from '@/stores/drivers'
import useFilteredDrivers from '@/composables/useFilteredDrivers'
import type { Tour } from '@/interfaces/tour'

import createId from '@/utilities/createId'
import formatDateForMachines from '@/utilities/formatDateForMachines'

const props = defineProps<{ tour?: Tour }>()
const emit = defineEmits<{ save: [tour: Tour] }>()

const { drivers, driverLocations } = storeToRefs(useDriversStore())
const { filteredDrivers, filterDriversByLocation } = useFilteredDrivers(drivers)

const newTour: Ref<Tour> = ref({
  id: createId(),
  customer: '',
  date: '',
  originLocation: '',
  destinationLocation: '',
  driver: '',
  ...props.tour
})

const originLocationIsFilled = computed(() => newTour.value.originLocation.length > 0)
const noAvailableDrivers = computed(() => newTour.value.originLocation.length === 0 || filteredDrivers.value.length === 0)
const editing = computed(() => Boolean(props.tour))
const today = formatDateForMachines(new Date())

function updateDrivers() {
  removeSelectedDriver()
  filterDriversByLocation(newTour.value.originLocation)
}

function removeSelectedDriver() {
  newTour.value.driver = ''
}

filterDriversByLocation(newTour.value.originLocation)
</script>

<template>
  <form class="form" @submit.prevent="emit('save', newTour)">
    <div class="form-control">
      <label class="form-control__label" for="customer">Customer name</label>
      <input
        id="customer"
        v-model.trim="newTour.customer"
        class="text-field"
        type="text"
        required
      >
    </div>

    <div class="form-control">
      <label class="form-control__label" for="date">Shipment date</label>
      <input
        id="date"
        v-model.trim="newTour.date"
        class="text-field"
        type="date"
        :min="today"
        required
      >
    </div>

    <div class="form-control">
      <label class="form-control__label" for="origin-location">Location from</label>
      <input
        id="origin-location"
        v-model.trim="newTour.originLocation"
        class="text-field"
        type="text"
        list="origin-locations"
        placeholder="e.g., Berlin"
        pattern="[A-Za-z\s]+"
        aria-describedby="origin-location-note"
        required
        @input="updateDrivers"
      >
      <div
        v-if="originLocationIsFilled && noAvailableDrivers"
        id="origin-location-note"
        class="form-control__note text-with-icon"
      >
        <IconExclamationCircle />
        There are no&nbsp;drivers in&nbsp;this location
      </div>
      <datalist id="origin-locations">
        <option
          v-for="location in driverLocations"
          :key="location"
          :value="location"
        ></option>
      </datalist>
    </div>

    <div class="form-control">
      <label class="form-control__label" for="destination-location">Location to</label>
      <input
        id="destination-location"
        v-model.trim="newTour.destinationLocation"
        class="text-field"
        type="text"
        placeholder="e.g., Stuttgart"
        pattern="[A-Za-z\s]+"
        required
      >
    </div>

    <div class="form-control">
      <label class="form-control__label" for="driver">Driver</label>
      <select
        id="driver"
        v-model="newTour.driver"
        class="select"
        aria-describedby="driver-note"
        :disabled="noAvailableDrivers"
        required
      >
        <option value="" selected>Select a driver</option>
        <option
          v-for="driver in filteredDrivers"
          :key="driver.id"
          :value="driver.name"
        >
          {{ driver.name }}
        </option>
      </select>
      <div id="driver-note" class="form-control__note">
        You can only assign drivers registered at&nbsp;the same departure location
      </div>
    </div>

    <button class="form__submit-button button button--primary" :disabled="noAvailableDrivers">
      <span v-if="editing">Save</span>
      <span v-else>Create</span>
      Tour
    </button>
  </form>
</template>
