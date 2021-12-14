<template>
  <div>
    <h1>Contact me</h1>
    <h3>
      Email: <a
        href="mailto:lucasliu7@hotmail.com"
      >lucasliu7@hotmail.com</a>
    </h3>
    <h3>or on <a href="https://www.linkedin.com/in/lucas-liu-a92859217/">LinkedIn</a></h3>
  </div>
</template>

<script lang="ts" setup>
import '@/style.css'
document.title = 'Contact';
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--on-background);
}

a:hover {
  background-color: var(--primary-color);
  border-bottom: var(--secondary-color) 1px solid;
}
</style>