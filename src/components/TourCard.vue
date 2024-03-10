<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { RouteName } from '@/constants/router'
import formatDateForHumans from '@/utilities/formatDateForHumans'
import type { Tour } from '@/interfaces/tour'

const props = defineProps<{ tour: Tour }>()
const emit = defineEmits<{ remove: [tour: Tour] }>()

const date = computed(() => formatDateForHumans(new Date(props.tour.date)))
</script>

<template>
  <h3>{{ tour.customer }}</h3>
  <div>On {{ date }}</div>
  <div>From {{ tour.originLocation }}</div>
  <div>To {{ tour.destinationLocation }}</div>
  <div>Drives {{ tour.driver }}</div>
  <RouterLink :to="{ name: RouteName.ToursEdit, params: { id: tour.id } }">Edit</RouterLink>
  <button type="button" @click="emit('remove', tour)">Remove</button>
</template>
