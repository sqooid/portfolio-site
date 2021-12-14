<template>
  <div class="project">
    <h1>Learning about 3D graphics</h1>
    <video
      class="video"
      controls
    >      
      <source
        src="https://cdn.discordapp.com/attachments/864062287102476311/919030000575991918/2021-12-11_11-56-30.mp4" 
        type="video/mp4"
      ></video>
  </div>
</template>

<script lang="ts" setup>

document.title = 'Projects | Cubes'

</script>

<style>

.video {
  max-width: max(50%, 540px);
}

@media(max-width: 540px) {
  .video {
    max-width: 100%;
  }
}

</style>