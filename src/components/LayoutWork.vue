<script lang="ts" setup>
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<template>
  <div class="work-layout">
    <div v-if="slots['title']" class="work-layout__title">
      <slot name="title" />
    </div>
    <slot name="content" />
    <div v-if="slots['footer']" class="work-layout__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-layout {
  padding-top: 2.25rem;
}

.work-layout__title {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.75rem;
}

.work-layout__footer {
  margin-top: 2.75rem;
  text-align: center;
}
</style>
