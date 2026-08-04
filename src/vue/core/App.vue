<template>
    <div class="app">
        <main class="content">
            <div class="site-box glass">
                <SectionItem
                    v-for="section in data.getSections()" 
                    :key="section.id"
                    :item="section"
                />
            </div>
        </main>
        <aside class="sidebar">
            <nav class="nav-box">
                <MenuItem
                    v-for="item in data.getSections()" 
                    :key="item.id" 
                    :item="item"
                />
            </nav>
        </aside>
        <footer class="footer">
        <p>© 2026 CV - License PinG</p>
        </footer>
    </div>
</template>

<script setup>
import { useData, useUtils } from "@/composables";
import MenuItem from "@/components/menuItem.vue";
import SectionItem from "@/components/sectionItem.vue"

const data = useData();
console.log(data.getSections())
</script>

<style scoped>
:global(:root) {
    --pad: 6px;
    --rad: 35px;
    --app-bg-color: #FFF;
    --text-dark: #1a1a1a;
}
:global(body) {
    overflow: hidden;
}
[class*="-box"] {
    padding: var(--pad);
    gap: var(--pad);
    border-radius: calc(var(--rad) - var(--pad));
}

.app {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: var(--pad);
    position: relative;

    background-color: var(--app-bg-color);

    & > * {
        display: grid;
        padding: var(--pad);
        gap: var(--pad);
        border-radius: var(--rad);
    }
}

.content {
    flex: 1;
    color: var(--text-dark);

    & [class*="-box"] {
        display: block;

        overflow-y: auto;
        scrollbar-width: none;
        overscroll-behavior-y: none;
    }
}
.site-box > .section-container:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    margin-bottom: var(--pad);
}

.sidebar {
    display: block;
    width: fit-content;
    overflow: visible !important;

    position: fixed !important;
    left: var(--pad);
    top: 50%;
    transform: translateY(-50%);
    z-index: 9999 !important;

    opacity: 0.3;
    transition: opacity 0.3s ease;

    & [class*="-box"] {
        display: inline-grid;
        grid-template-columns: max-content;
    }
    .nav-box:hover :deep(.label) {
        max-width: 500px;
        margin-left: var(--pad); 
    }
}
.sidebar:hover {
    opacity: .8;
}

.footer {
    height: fit-content;
    line-height: 1;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 0;
    font-size: 10px;
}
</style>