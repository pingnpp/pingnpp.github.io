<template>
  <div class="section-box">
    <div :id="data.id" class="header-box">
      <font-awesome-icon :icon="getIcon(data.faIcon)" class="icon" />
      <h1>{{ getTitle(data.id) }}</h1>
    </div>
    <div class="subsection-box"
      v-for="subsection in data.children"
      :key="subsection.id">
      <div :id="subsection.id" class="topic-box">
        <font-awesome-icon :icon="getIcon(subsection.faIcon)" class="icon" />
        <h2>{{ getTitle(subsection.id) }}</h2>
      </div>
      <div class="content-box">
        <component
          :is="_getSectionComponentByName(subsection.component)"
          :data="subsection"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUtils } from "@/composables";
import DefaultSection from "../vue/sections/Default.vue"
const utils = useUtils();
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
const getTitle = (id) => {
  return utils.capitalize(id || '');
};
const getIcon = (faIcon) => {
  return faIcon || ['fas', 'folder'];
};
const componentsMap = {DefaultSection}
const _getSectionComponentByName = (name) => {
    return componentsMap[name] || DefaultSection;
}
</script>

<style scoped>
.header-box,
.topic-box {
  align-items: center;
  width: fit-content;
}
.section-box {
  --depth: 1;
  flex-direction: column;
  min-height: 100%;
}
.header-box {
  --depth: 2;
  scroll-margin-top: var(--pad);
}
.subsection-box {
  --depth: 2;
  flex-direction: column;
}
.topic-box {
  --depth: 3;
  scroll-margin-top: calc(var(--pad) * 2);
}
.content-box {
  --depth: 3;
  flex-direction: column;
}
.header-box .icon {
  font-size: 50px;
}
.topic-box .icon {
  font-size: 30px;
}
h1 {
  font-size: 2rem;
  line-height: 1;
}
h2 {
  font-size: 1.5rem;
  line-height: 1;
}
</style>