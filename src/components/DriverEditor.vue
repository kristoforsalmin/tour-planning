<script lang="ts" setup>
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
  <form class="form" @submit.prevent="emit('save', driver)">
    <div class="form-control">
      <label class="form-control__label" for="full-name">Full name</label>
      <input
        id="full-name"
        v-model.trim="driver.name"
        class="text-field"
        type="text"
        required
      >
    </div>
    <div class="form-control">
      <label class="form-control__label" for="location">Located in</label>
      <input
        id="location"
        v-model.trim="driver.location"
        class="text-field"
        type="text"
        placeholder="e.g., New York"
        pattern="[A-Za-z\s]+"
        required
      >
    </div>
    <button class="form__submit-button button button--primary">Save</button>
  </form>
</template>
