<template>
  <div class="top-bar">
    <TopBarButton
      label="Home"
      @clicked="onHomeClicked"
    />
    <TopBarButton
      label="Museum"
      @clicked="onMuseumClicked"
    />
  </div>
  <div class="spacer layer-top" />
</template>

<script lang="ts" setup>
import TopBarButton from './TopBarButton.vue';

const emits = defineEmits(['homeClicked','museumClicked']);

const onHomeClicked = () => {
	emits('homeClicked');
}
const onMuseumClicked = () => {
	emits('museumClicked')
}
</script>

<style>
@import '../../style.css';
.top-bar{
	background-color: var(--primary-color);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 10px;
}

</style>