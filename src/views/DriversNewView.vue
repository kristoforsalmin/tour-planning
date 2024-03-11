<script lang="ts" setup>
import { useRouter, RouterLink } from 'vue-router'

import DriverEditor from '@/components/DriverEditor.vue'
import IconChevronLeft from '@/components/IconChevronLeft.vue'
import LayoutWork from '@/components/LayoutWork.vue'

import { useDriversStore } from '@/stores/drivers'
import { RouteName } from '@/constants/router'
import type { Driver } from '@/interfaces/driver'

const router = useRouter()
const { addDriver } = useDriversStore()

function saveDriver(driver: Driver) {
  addDriver(driver)
  router.push({ name: RouteName.Drivers })
}
</script>

<template>
  <RouterLink :to="{ name: RouteName.Drivers }" class="link text-with-icon">
    <IconChevronLeft />
    All Drivers
  </RouterLink>

  <LayoutWork>
    <template #title>
      <h1>Who’s Driving?</h1>
    </template>
    <template #content>
      <DriverEditor @save="saveDriver" />
    </template>
  </LayoutWork>
</template>
