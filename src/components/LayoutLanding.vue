<script lang="ts" setup>
defineProps<{ image: string }>()
</script>

<template>
  <div class="landing-layout">
    <img
      class="landing-layout__image"
      :src="image"
      alt=""
      loading="lazy"
    >
    <div class="landing-layout__text">
      <slot name="text" />
    </div>
    <slot name="button" />
  </div>
</template>

<style lang="scss" scoped>
.landing-layout {
  padding-top: max(17.5vh, 5rem);
  text-align: center;
}

.landing-layout__image {
  width: 10rem;
  height: 10rem;
  margin-bottom: 0.5rem;
  object-fit: contain;
}

.landing-layout__text {
  margin-bottom: 1.5rem;
}
</style>
