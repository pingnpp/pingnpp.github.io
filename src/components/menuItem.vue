<template>
  <div
    class="menu-container"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="menu-box glass"
      :class="{ 'is-open': isOpen }"
      @click="handleToggle"
    >
      <font-awesome-icon :icon="icon" class="icon" />
      <span class="label">{{ labelText }}</span>
    </div>
    <transition name="slide-fade">
      <div v-if="hasChildren && isOpen" class="submenu-box">
        <MenuItem
          v-for="child in data.children"
          :key="child.id"
          :data="child"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useUtils } from "@/composables";
const utils = useUtils();
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
const hasChildren = computed(() => props.data.children && props.data.children.length > 0);
const labelText = computed(() => utils.capitalize(props.data?.id || 'Loading...'));
const icon = computed(() => props.data?.faIcon || ['fas', 'folder']);
const isOpen = ref(false);
let hoverTimer = null;
const handleMouseEnter = () => {
  if (hasChildren.value) {
    hoverTimer = setTimeout(() => {
      isOpen.value = true;
    }, 200);
  }
};
const handleMouseLeave = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer);
    hoverTimer = null;
  }
  isOpen.value = false;
}
const handleToggle = () => {
  if (hasChildren.value) {
    if (hoverTimer) clearTimeout(hoverTimer);
    isOpen.value = !isOpen.value;
  }
  if (props.data.id) {
    const element = document.getElementById(props.data.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};
</script>

<style scoped>
  .menu-container {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
  }
  .menu-box {
    --depth: 2;
    align-items: center;
    justify-content: center;
    min-width: var(--min-width);
    min-height: var(--min-height);
    width: 100%;
    list-style: none;
    cursor: pointer;
    color: #444;
    margin: 0;
    padding: calc(var(--pad) * 2);
    gap: 0;
    opacity: 0.8;
    transition: opacity 0.2s ease, background-color 0.3s ease;
  }
  .menu-box:hover, .menu-box.is-open {
    opacity: 1;
  }
  .submenu-box {
    --depth: 1;
    flex-direction: column;
    position: absolute;
    left: 100%;
    top: calc(var(--pad) * -1);
    min-width: max-content;
    z-index: 999;
  }
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-10px);
  }
  .icon {
    font-size: 24px;
    width: 24px;
  }
  .label {
    flex: 1;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    max-width: 0;
    margin-left: 0;
    transition: max-width 0.4s ease, margin-left 0.3s ease;
  }
</style>