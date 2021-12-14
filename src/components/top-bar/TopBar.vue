<template>
  <div class="top-bar">
    <h2 id="bar-logo">
      Lucas_Liu;
    </h2>
    <NavButton
      v-for="item in buttonList" 
      :key="item.url"
      class="top-bar-button"
      :label="item.label"
      :url="item.url"
    />
  </div>
</template>

<script lang="ts" setup>
import '@/style.css';
import NavButton from './NavButton.vue';

const buttonList = [
  {
    label: "About",
    url: '/'
  },
  {
    label: 'Projects',
    url: '/projects'
  },
  {
    label: 'Contact',
    url: '/contact'
  }
]

</script>


<style scoped>

#bar-logo {
  user-select: none;
	margin: 0;
	margin-bottom: 5px;
	width: fit-content;
	height: fit-content;
	padding: 14px;
  color: white;
  justify-self: left;
  border: white solid 0.12em;
}

.top-bar{
  font-family: 'Inconsolata';
	background-color: var(--bar-color);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: left;
	padding: 10px;
  padding-bottom: 5px;
	color: var(--on-bar);
  flex-wrap: wrap;
}

</style>