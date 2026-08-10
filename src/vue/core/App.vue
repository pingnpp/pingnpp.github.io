<template>
    <div class="app">
        <main class="content">
            <div class="site-box glass">
                <SectionItem
                    v-for="section in sections"
                    :key="section.id"
                    :data="section"
                />
            </div>
        </main>
        <aside class="sidebar">
            <nav class="nav-box">
                <MenuItem
                    v-for="section in sections"
                    :key="section.id"
                    :data="section"
                />
            </nav>
        </aside>
        <footer class="footer">
            <p>© 2026 CV - License PinG</p>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useData } from "@/composables";
import MenuItem from "@/components/menuItem.vue";
import SectionItem from "@/components/sectionItem.vue"
const data = useData();
const sections = computed(() => data.getSections());
</script>

<style scoped>
:global(body) {
    overflow: hidden;
}
.app {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: var(--pad);
    background-color: var(--app-bg-color);
}
.content {
    flex: 1;
    overflow: hidden;
}
.site-box {
    --depth: 1;
    height: 100%;
    overflow-y: auto;
    scrollbar-width: none;
    overscroll-behavior-y: none;
    flex-direction: column;
    padding: 0;
}
.sidebar {
    position: fixed;
    left: var(--pad);
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}
.sidebar:hover {
    opacity: 0.8;
}
.nav-box {
    --depth: 1;
    flex-direction: column;
}
.nav-box:hover :deep(.label) {
    max-width: 500px;
    margin-left: var(--pad);
}
.footer {
    text-align: center;
    font-size: 10px;
    white-space: nowrap;
    margin-top: var(--pad);
}
</style>