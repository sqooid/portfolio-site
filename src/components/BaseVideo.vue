<template>
  <video
    controls
  >
    <source
      :src="props.url"
      type="video/mp4"
    >
  </video>
</template>

<script lang="ts" setup>
interface Props {
	url: string
}

const props = withDefaults(defineProps<Props>(), {
	url: ""
})
</script>