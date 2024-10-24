<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    id: {
        type: String,
        Required: true
    }
})
const job = ref({})
const isLoading = ref(true)
const router = useRouter()

onMounted(async() => {
    const result = await fetch(`http://localhost:3000/jobList/${props.id}`);
    if(result.status == 404){
        router.push({name: 'NotFound'});
        return;
    }
    const response = await result.json();
    job.value = response;
    isLoading.value = false;
})

</script>


<template>
    <div v-if="isLoading">isLoading</div>
    <div v-else>
        <h1>{{ job.title }}</h1>
        <p>{{ job.comp }}</p>
        <p>{{ job.loc }}</p>
        <p>{{ job.start }}</p>
        <p>{{ job.end }}</p>
        <p>{{ job.desc }}</p>
        <p>{{ job.achv }}</p>
    </div>
</template>
