<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { RouteName } from '@/constants/router'
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: RouteName.Drivers }">Drivers</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: RouteName.Tours }">Tours</RouterLink>
      </li>
    </ul>
  </nav>
</template>
