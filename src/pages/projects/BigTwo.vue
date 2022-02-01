<template>
  <div class="content-wrapper">
    <div class="width-limiter content">
      <h1 style="text-align: center">Online Big Two</h1>
      <p>
        Check it out here:
        <a href="https://sqooid.ddns.net" class="link">
          https://sqooid.ddns.net
        </a>
      </p>
      <p>
        Source code:
        <a href="https://github.com/sqooid/big-two-multi" class="link">
          https://github.com/sqooid/big-two-multi
        </a>
      </p>
      <img
        class="image"
        src="https://cdn.discordapp.com/attachments/864062287102476311/937697374728499240/unknown.png"
        alt="Screenshot" />

      <h3>What is Big Two?</h3>
      <p>
        Big two is a tabletop cardgame usually played with four players. Using
        poker hands, players try to get rid of all their cards by placing larger
        hands than the player before them. The first player to dump all their
        cards wins.
      </p>
      <p>
        This web app allows people to create their own lobbies then invite
        people to join and play Big Two with.
      </p>
      <h3>Why does this exist?</h3>
      <p>
        Big Two was a game that I played with my friends all the time at the
        school cafeteria during lunch breaks while back in high school. Upon
        discovering a serious lack of decent platforms on which to continue our
        much-loved activity, I decided to create my own modern platform for it.
      </p>
      <h3>How was it made?</h3>
      <div class="tech-list">
        <img
          class="tech-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          alt="Vue logo" />
        <img
          class="tech-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          alt="Typescript logo" />
        <img
          class="tech-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
          alt="Node logo" />
        <img
          class="tech-logo"
          src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2014/05/homepage-docker-logo.png?itok=zx0e-vcP"
          alt="Docker logo" />
      </div>
      <p>
        The tech stack for this project mainly involved Vue 3 for the front end
        and Node for the back end server. Docker was used to deploy the server
        on my Raspberry Pi.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
}
.content {
  text-align: left;
}
.image {
  width: 66ex;
}
.tech-logo {
  height: 20px;
  margin-right: 10px;
}
</style>
