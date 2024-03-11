<script lang="ts" setup>
import { computed } from 'vue'
import IconMapPin from './IconMapPin.vue';
import createRandomHexColor from '@/utilities/createRandomColor'
import type { Driver } from '@/interfaces/driver'

const props = defineProps<{ driver: Driver }>()

const avatarColor = createRandomHexColor()

const initials = computed(() => (
  props.driver.name
    .split(' ')
    .map(name => name.charAt(0).toUpperCase())
    .join('')
))
</script>

<template>
  <div class="driver-card card">
    <div class="driver-card__avatar" :style="{ 'background-color': avatarColor }">{{ initials }}</div>
    <div>
      <h2 class="driver-card__name">{{ driver.name }}</h2>
      <div class="text-with-icon">
        <IconMapPin />
        {{ driver.location }}
      </div>
    </div>
  </div>
</template>

<style land="scss" scoped>
@use "@/assets/components/card";

.driver-card {
  display: flex;
  gap: 1rem 0.75rem;
  align-items: center;
}

.driver-card__avatar {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  font-size: var(--font-size-x-large);
  font-weight: 700;
  line-height: 1;
  color: rgb(255 255 255 / 50%);
  background-color: var(--color-brand);
  border-radius: 100%;
}

.driver-card__name {
  margin-bottom: 0.25rem;
  font-size: var(--font-size-large);
}
</style>
