<template>
  <TopBar />
  <router-view id="content" />
</template>

<script lang="ts" setup>
import TopBar from "@/components/top-bar/TopBar.vue"
import './style.css';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@450&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@501&family=Roboto&display=swap');

body {
  background-color: var(--background-color);
  margin: 0;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--on-background);
}

.project {
  max-width: 980px;
  padding: 20px;
  margin: auto;
}

</style>
