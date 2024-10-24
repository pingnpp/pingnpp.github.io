<template>
    <Celibrate msg/>
</template>

<script>
import Celibrate from '../components/Celibrate.vue'
export default {
  components: {
    Celibrate
  }
};
</script>


<style>
:root {
--sans-serif: 'Open Sans', sans-serif;
--serif: 'Lora', serif;
--gray: #8e9aaf;
--pale: #eac7cc;
}

* {
    font-family: var(--sans-serif);
    font-size: min(1vw, 1vh);
    color: var(--gray);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body::before {
    --line: color-mix(in lch, canvasText 25%, transparent);
    --size: 40px;
    content: '';
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: linear-gradient(90deg,
            var(--line) 1px,
            transparent 1px var(--size)) 0 -5vmin / var(--size) var(--size),
        linear-gradient(var(--line) 1px, transparent 1px var(--size)) 0 -5vmin / var(--size) var(--size);
    mask: linear-gradient(-45deg, transparent 60%, white);
    top: 0;
    z-index: -1;
}
</style>