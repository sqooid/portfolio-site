<template>
  <div
    class="tile"
    :class="{'placeholder': props.title.length == 0}"
  >
    <img
      class="tile-img"
      :src="props.img"
      :alt="props.title"
    >
    <div class="tile-text">
      <h3>
        {{ props.title }}
      </h3>
      <h4>
        {{ props.description }}
      </h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@/style.css';

export interface GridItemProps {
	img: string,
	title: string,
	description?: string,
	path?: string
}

const props = withDefaults(defineProps<GridItemProps>(),{
	img: '',
	title: '',
	description: '',
	path: ''
}) ;

</script>

<style>
.tile {
	aspect-ratio: 1;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}
.tile-img {
	object-fit: cover;
	min-width: 100%;
	min-height: 112%;
	transition-duration: 0.5s;
	transition-property: all;
}
.tile:hover .tile-img{
	transform: translateY(5%);
}
.tile-text {
	color: white;
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 1;
	transition-duration: 0.5s;
	transition-property: all;
	transition-timing-function: cubic-bezier(0,1,.65,1);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	white-space: pre-wrap;
}
.tile:hover .tile-text{
	opacity: 1;
	background-color: rgba(0,0,0,0.7);
}
.tile-desc {
	width: fit-content;
	background-color: var(--secondary-color);
	margin: 5px;
	padding: 5px;
	border-radius: 5px;
}

.placeholder {
	cursor: default;
	pointer-events: none;
}
</style>