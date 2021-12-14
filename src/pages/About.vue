<template>
  <div class="expos content">
    <h1>
      Hey, I'm Lucas.
    </h1>
    <p>
      I'm a student at Monash University, studying Electrical Engineering and Computer Science. After having a taste of the wonderful world of coding in my first year there, I have since been delving into all kinds of technologies, from web and android development to even dabbling in some 3D graphics (that is some mind-blowing stuff).
    </p>
    <p>
      Some of my top skills include C++, C, Python, JavaScript/TypeScript, Vue and Kotlin. Some of the other skills that I have some experience in include Rust, C#, Go, OpenGL and React. In fact, this very website is made with Vue (<a
        href="https://github.com/sqooid/portfolio-site"
        class="link"
      >source</a>).
    </p>
    <p>However, coding isn't the only thing I spend my time on. I also love reading, moving around, listening to sick melodies and fantasizing about full dive technology.</p>
    <div id="museum-section">
      <NavButton
        class="page-button"
        label="My stuff"
        url="/museum"
      />
      <p class="left no-top">
        Here's something that might help you get to know me a bit.
      </p>
    </div>
  </div>
</template>


<script lang="ts" setup>
import '@/style.css';
import NavButton from '@/components/top-bar/NavButton.vue'

document.title = 'About'
</script>

<style>


</style>

<style scoped>

#museum-section {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page-button {
  color: var(--on-background);
  box-shadow: 0 0 0 .12em var(--on-background);
}

.left {
  margin-left: 20px;
}
</style>