<template>

    <h1>asdf</h1>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <!-- <p>{{ job.comp }}</p>
        <p>{{ job.loc }}</p>
        <p>{{ job.start }}</p>
        <p>{{ job.end }}</p>
        <p>{{ job.desc }}</p>
        <p>{{ job.achv }}</p> -->
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            // id: this.$route.params.id,
            job: null
        }
    },
    mounted() {
        console.log(this.id)
        fetch('http://localhost:3000/jobs/' + this.id)
            .then((res) => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    }
}
</script>
