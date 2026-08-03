<template>
  <div :id="item.id" class="section-container">
    <h1>{{ utils.capitalize(item.id) }}</h1>
  

    <template v-if="item.children && item.children.length > 0">
      <div 
      v-for="sub in item.children" 
      :key="sub.id" 
      :id="sub.id" 
      class="sub-section"
      >
        <h2>{{ utils.capitalize(sub.id) }}</h2>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useUtils } from "@/composables";

const utils = useUtils();
const props = defineProps({
  item: {
    type: Object,
    required: true,
    // default: () => ({})
  }
})

</script>

<style scoped>
.section-container {
  height: 100%;
}

</style>