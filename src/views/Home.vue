<template>
  <!-- <h1>profile</h1> -->
  <div class="profile"></div>
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
export default {
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
