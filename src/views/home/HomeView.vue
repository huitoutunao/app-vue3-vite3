<template>
  <div class="page" @click="counter.increment()">
    {{ countValue }}
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store'

const counter = useCounterStore()
const { countValue } = storeToRefs(counter)
</script>

<style scoped>
.page {
  position: relative;
}
</style>
