<script setup lang="ts">
import { ref, type Ref } from 'vue'
import createId from '@/utilities/createId'
import type { Driver } from '@/interfaces/driver'

const props = defineProps<{ driver?: Driver }>()
const emit = defineEmits<{ save: [driver: Driver] }>()

const driver: Ref<Driver> = ref({
  id: createId(),
  name: '',
  location: '',
  ...props.driver
})
</script>

<template>
  <h1>Who’s Driving?</h1>
  <form @submit.prevent="emit('save', driver)">
    <label>
      Full name
      <input
        type="text"
        v-model.trim="driver.name"
        required
      >
    </label>
    <label>
      Location
      <input
        type="text"
        pattern="[A-Za-z\s]+"
        v-model.trim="driver.location"
        required
      >
    </label>
    <button>Register Driver</button>
  </form>
</template>
