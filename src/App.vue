<template>
  <TopBar />
  <router-view
    v-slot="{Component}"
  >
    <div id="transition-block">
      <transition
        name="slide-left"
        mode="out-in"
      >
        <component
          :is="Component"
        />
      </transition>
    </div>
  </router-view>
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

.expos {
  max-width: 66ex;
  padding: 20px;
  margin: auto;
}

.link {
  text-decoration: none;
  color: var(--link-color);
  background-position: 0 100%;
	background-size: 100% 200%;
	background-image: linear-gradient(to top, #0000 50%, var(--primary-color) 50%);
	transition: all 0.2s cubic-bezier(0,1,0.65,1);
}

.link:hover {
  color: var(--on-primary);
	background-position: 0 0%;
  border-bottom: var(--secondary-color) 1px solid;
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: all 0.1s cubic-bezier(0,1,0.65,1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-left-leave-to {
  opacity: 0;
}
</style>
