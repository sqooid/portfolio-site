<template>
  <div
    class="button"
    @click="onClicked"
  >
    <h3 class="button-text">
      {{ props.label }}
    </h3>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

interface Props {
	label: string
	url: string
}
const props = defineProps<Props>()

const onClicked = () => {
	router.push(props.url);
}

</script>

<style scoped>
.button {
	margin: 0 5px;
	margin-bottom: 5px;
	width: fit-content;
	height: fit-content;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-position: 0 100%;
	background-size: 100% 200%;
	background-image: linear-gradient(to top, #0000 50%, var(--primary-color) 50%);
	transition: background-position 200ms cubic-bezier(0,1,.65,1);
}
.button-text {
	width: fit-content;
	height: fit-content;
	margin: 0 0;
	user-select: none;
	letter-spacing: 2px;
	transition: all 0.2s cubic-bezier(0,1,.65,1);
}

.button:hover{
	background-position: 0 0%;
	cursor: pointer;
}

.button:hover .button-text {
	color: var(--on-primary);
}

</style>