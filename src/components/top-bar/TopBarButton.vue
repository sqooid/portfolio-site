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
interface Props {
	label: string
}
const props = defineProps<Props>()
const emits = defineEmits(['clicked'])

const onClicked = () => {
	emits("clicked")
}
</script>

<style scoped>
.button {
	margin: 0 5px;
	width: fit-content;
	height: fit-content;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-position: 0 100%;
	background-size: 100% 200%;
	background-image: linear-gradient(to top, #0000 50%, var(--secondary-color) 50%);
	transition: background-position 200ms cubic-bezier(0,1,.65,1);
	color: var(--on-primary);
}
.button-text {
	width: fit-content;
	height: fit-content;
	margin: 0 0;
	user-select: none;
	letter-spacing: 2px;
}

.button:hover{
	background-position: 0 0%;
	cursor: pointer;
	color: var(--on-secondary);
}

</style>