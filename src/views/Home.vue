<template>
  <!-- <h1>profile</h1> -->
  <div class="celibrate">
    <Celibrate msg/>
  </div>
  <!-- <div v-if="eduList">
    <div v-for="edu in eduList" :key="edu.id">
      <h2>{{ edu.inst }}</h2>
      <p>{{ edu.start }} - {{ edu.end }}</p>
    </div>
  </div>
  <div v-if="jobs">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetial', params: { id: job.id }}">
        <h2>{{ job.comp }}</h2>
        <p>{{ job.start }} - {{ job.end }}</p>
      </router-link>
    </div>
  </div> -->
</template>

<script>

import Celibrate from '@/components/Celibrate.vue'
export default {
  name: 'Home',
  components: {
    Celibrate
  },
  data() {
    return {
      eduList: [],
      jobs: []
    }
  },
  mounted() {
    
    fetch('http://localhost:3000/eduList')
      .then((res) => res.json())
      .then(data => this.eduList = data)
      .catch(err => console.log(err.message))
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then(data => this.jobs = data)
      .catch(err => console.log(err.message))
  },
  methods: {}
}
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
        /* : left; */
    }
</style>
