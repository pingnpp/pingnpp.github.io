<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { linkList } from '@/assets/data/db.json';
const sizeThreshold = 300;
const isSmallScreen = ref(window.innerWidth < sizeThreshold);
const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth < sizeThreshold;
};
onMounted(() => { window.addEventListener('resize', updateScreenSize); });
onBeforeUnmount(() => { window.removeEventListener('resize', updateScreenSize); });
</script>

<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="info">
    <img class="profile" alt="Vue logo" src="./assets/logo.png">
    <div class="content">
      <h3>Nopporn Bussabavalai</h3>
      <p>Full-stack Robotics</p>
    </div>
    <button v-if="isSmallScreen">Follow</button>
    <ul class="contact">

      <li v-for="link in linkList" :key="link.id">
        <a :href="link.url">
          <font-awesome-icon :icon=link.icon />
          {{ link.name }}
        </a>
      </li>
      <!-- <div v-for="link in linkList" :key="link.id">
        <a :href="link.url">
          <font-awesome-icon :icon=link.icon />
          {{ link.name }}
        </a>
      </div> -->
    </ul>
    
  </div>
  <router-view/>
</template>

<style>
  .root {
    --dark: #131313;
    --lite: rgba(1,1,1,0.6);
  }
  .info {
    width: 15vmin;
    float: left;
    padding: 1vmin;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .content {
    width: 100%;
    text-align: left;
    margin: 0.5vmin;
  }
  .content h3 {
    font-size: 2.5vmin;
    color: var(--dark);
    margin-top: 0.5vmin;
    margin-bottom: 0.5vmin;
  }
  .content p {
    font-size: 1.5vmin;
    color: var(--lite);
    margin-top: 0.5vmin;
    margin-bottom: 0.5vmin;
  }
  .contact {
    width: 100%;
    justify-content: left;
    padding: 0;
    margin: 0;
    display: grid;
    line-height: 2vmin;
  }
  li{
    height: auto;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .contact a {
    font-size: 1.2vmin;
    color: var(--dark);
    text-align: left;
    margin: 0.5vmin;
    text-decoration: none;
  }
  .contact a:hover {
    text-decoration: underline;
  }
</style>