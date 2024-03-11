<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { RouteName } from '@/constants/router'
</script>

<template>
  <nav>
    <ul class="navigation">
      <li>
        <RouterLink
          :to="{ name: RouteName.Drivers }"
          class="link"
          active-class="is-active"
        >
          Drivers
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="{ name: RouteName.Tours }"
          class="link"
          active-class="is-active"
        >
          Tours
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  column-gap: 1rem;
  line-height: 1;
}
</style>
