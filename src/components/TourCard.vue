<script lang="ts" setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { RouteName } from '@/constants/router'

import IconPencil from './IconPencil.vue'
import IconTrash from './IconTrash.vue'

import formatDateForHumans from '@/utilities/formatDateForHumans'
import type { Tour } from '@/interfaces/tour'

const props = defineProps<{ tour: Tour }>()
const emit = defineEmits<{ remove: [tour: Tour] }>()

const date = computed(() => formatDateForHumans(new Date(props.tour.date)))
</script>

<template>
  <div class="tour-card card">
    <h2 class="tour-card__customer">{{ tour.customer }}</h2>
    <ul class="tour-card__attributes">
      <li class="tour-card__attribute">
        <div class="tour-card__label">From</div>
        {{ tour.originLocation }}
      </li>
      <li class="tour-card__attribute">
        <div class="tour-card__label">To</div>
        {{ tour.destinationLocation }}
      </li>
      <li class="tour-card__attribute">
        <div class="tour-card__label">Date</div>
        {{ date }}
      </li>
      <li class="tour-card__attribute">
        <div class="tour-card__label">Driver</div>
        {{ tour.driver }}
      </li>
    </ul>
    <ul class="tour-card__actions">
      <li>
        <RouterLink
          :to="{ name: RouteName.ToursEdit, params: { id: tour.id } }"
          class="tour-card__link link text-with-icon"
        >
          <IconPencil />
          Edit
        </RouterLink>
      </li>
      <li>
        <button
          class="tour-card__link tour-card__link--danger link button text-with-icon"
          type="button"
          @click="emit('remove', tour)"
        >
          <IconTrash />
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/components/card";
@use "@/assets/components/link";

.tour-card__customer {
  margin-bottom: 1rem;
  font-size: var(--font-size-large);
}

.tour-card__attributes {
  --column-gap: 1rem;

  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem var(--column-gap);
  margin-bottom: 1rem;
}

.tour-card__attribute {
  --width: 25%;

  flex: 1 0 calc(var(--width) - var(--column-gap));
  white-space: nowrap;

  @media (width <= 40em) {
    --width: 50%;
  }
}

.tour-card__label {
  font-size: var(--font-size-x-small);
  color: var(--color-text-lighter);
}

.tour-card__actions {
  display: flex;
  column-gap: 1rem;
  line-height: 1;
}

.tour-card__link {
  font-size: var(--font-size-x-small);
}

.tour-card__link--danger:hover {
  color: var(--color-red);
}
</style>
