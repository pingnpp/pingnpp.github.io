<template>
  <div
    class="menu-node"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="menu-item glass"
      :class="{ 'is-open': isOpen }"
      @click="handleToggle"
    >
      <font-awesome-icon
        :icon="item?.faIcon || ['fas', 'folder']"
        class="icon"
      />
      <span class="label">{{ utils.capitalize(item.id || 'Loading...') }}</span>
    </div>
    <transition name="expand">
      <div v-if="hasChildren && isOpen" class="sub-menu-container">
        <MenuItem
          v-for="child in item.children"
          :key="child.id"
          :item="child"
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
  item: {
    type: Object,
    required: true,
    // default: () => ({})
  }
})
const hasChildren = computed(() => props.item.children && props.item.children.length > 0);
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
  if (props.item.id) {
    const element = document.getElementById(props.item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};
</script>

<style scoped>
  .menu-node {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: var(--min-width);
    width: 100%;
    min-height: var(--min-height);
    list-style: none;
    cursor: pointer;
    color: #444;
    transition: all 0.3s ease;
    margin: 0;
    padding: calc(var(--pad) * 2);
    border-radius: calc(var(--rad) - var(--pad) * 2);
    /* background-color: red; */

    opacity: .8;
    transition: opacity 0.1s ease;
  }

  .menu-item:hover {
    opacity: 1;
  }

  
  .sub-menu-container {
    position: absolute;
    left: 100%;
    top: 0;
    padding-left: var(--pad);
    
    display: flex;
    flex-direction: column;
    gap: var(--pad);
    min-width: max-content;
    z-index: 999;
  }
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter-from, .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-10px);
  }

  .icon {
    font-size: 18px;
    width: 24px;
    display: flex;
    justify-content: center;
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