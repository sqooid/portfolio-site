<template>
  <div class="project">
    <h1>Boored</h1>
    <p class="description">
      Boored is a prototype Android app that I created for browsing Booru sites. For anyone who is unfamiliar with what those are, they are essentially image hosting sites that allow you to filter the images using tags that are assigned to every image that is uploaded. The site that Boored uses specifically is Safebooru.
    </p>
    <div class="feature">
      <BaseVideo
        url="https://cdn.discordapp.com/attachments/864062287102476311/919838224300511322/search-cut1.mp4"
        class="video left"
      />
      <p class="feature-text">
        The main page of the app is the Tag Search page, where multiple space-delimited tags can be input to the search.
      </p>
      <p class="feature-text">
        Clicking on posts allows you to have a closer look at the images, copy the source link, favourite them, and check out what tags it currently has.
      </p>
      <BaseVideo
        url="https://cdn.discordapp.com/attachments/864062287102476311/919849058141634600/detail-cut.mp4"
        class="video right"
      />
      <BaseVideo
        url="https://cdn.discordapp.com/attachments/864062287102476311/919840964556750908/tags-cut.mp4"
        class="video left"
      />
      <p class="feature-text">
        The tags listed for each post can be clicked on to automatically start another search using that tag.
      </p>
      <p class="feature-text">
        Of course, the search page has an infinite scroll.
      </p>
      <BaseVideo
        url="https://cdn.discordapp.com/attachments/864062287102476311/919852633555095562/infinite-cut.mp4"
        class="video right"
      />
      <BaseVideo
        url="https://cdn.discordapp.com/attachments/864062287102476311/919860948775354369/settings-cut.mp4"
        class="video left"
      />
      <p class="feature-text">
        There are various settings that can used to tune the search page to your device size and network capabilities.
      </p>
      <p class="feature-text">
        Favouriting a post means it can be seen in the Favourites page, and can be downloaded to any directory on your device. 
      </p>
      <BaseVideo
        url="https://cdn.discordapp.com/attachments/864062287102476311/919872563935596544/favs-cut.mp4"
        class="video right"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseVideo from '@/components/BaseVideo.vue';

</script>

<style>
.video {
  max-height: 60vh;
}

p {
  text-align: center;
}

.feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}

.description {
  text-align: justify;
}

@media (max-width: 1919) {
  .feature {
    display: none;
  }
}

.feature-text {
  margin: auto 10px;

}
</style>