<script setup>
import { RouterLink, RouterView } from 'vue-router'
import EventCard from './components/EventCard.vue'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
  #layout {
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: greyscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }

  h2 {
    font-size: 20px;
  }
  
  p {
    margin-bottom: 4px;
      
  }
</style>
