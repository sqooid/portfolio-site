<template>
  <div class="vult">
    <img
      class="banner"
      src="https://cdn.discordapp.com/attachments/864062287102476311/931007364386144266/Artboard_14x.png"
      alt="Vult banner" />
    <div class="content-wrapper">
      <div class="content width-limiter">
        <p>
          Visit the web app:
          <a href="https://vult.sqooid.tk" target="_blank" class="link">
            Vult web app
          </a>
        </p>
        <p>
          Download the unofficial apk:
          <a href="/assets/files/vult.apk" class="link">Download</a>
        </p>
        <p>
          Download on Google play store:
          <a
            class="link"
            href="https://play.google.com/store/apps/details?id=com.sqooid.vult">
            Play Store
          </a>
        </p>
        <div class="screenshot-gallery">
          <img
            class="screenshot"
            src="https://cdn.discordapp.com/attachments/864062287102476311/930723958377029692/Artboard_1.png"
            alt="Vult login page" />
          <img
            class="screenshot"
            src="https://cdn.discordapp.com/attachments/864062287102476311/930723960214147143/Artboard_6.png"
            alt="Vult companion web app" />
          <img
            src="https://cdn.discordapp.com/attachments/864062287102476311/930723958603518002/Artboard_2.png"
            alt="Vult main page"
            class="screenshot" />
          <img
            src="https://cdn.discordapp.com/attachments/864062287102476311/930723958897143888/Artboard_3.png"
            alt="Vult edit page"
            class="screenshot" />
          <img
            src="https://cdn.discordapp.com/attachments/864062287102476311/930723959245242398/Artboard_4.png"
            alt="Vult password generator"
            class="screenshot" />
          <img
            src="https://cdn.discordapp.com/attachments/864062287102476311/930723959622742036/Artboard_5.png"
            alt="Vult sync page"
            class="screenshot" />
        </div>

        <div class="tech-list">
          <img
            class="tech-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="Vue logo" />
          <img
            class="tech-logo"
            src="https://seeklogo.com/images/C/capacitor-logo-DF3634DD70-seeklogo.com.png"
            alt="Capacitor logo" />
          <img
            class="tech-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            alt="Typescript logo" />
        </div>
        <p>
          Vult is an offline password storage app that I developed with the
          focus being on simplicity and ease of use.
        </p>
        <p>
          I wanted to try out the cross-platform development that frameworks
          such as React Native and Flutter enable. However, not having a Macbook
          would have made IOS development a little too inconvenient so I decided
          to focus on developing an Android app and web app.
        </p>
        <p>
          The technologies I decided to use were Vue 3 and Typescript for the
          frontend and logic and Capacitor for the capability to port the
          resultant web app into a native Android application.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
document.title = 'Projects | Vult'
</script>

<style scoped>
.vult {
  margin-bottom: 200px;
}
.banner {
  width: 100%;
  height: auto;
  min-height: 200px;
  max-height: 50vh;
  object-fit: cover;
}
.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  width: 90%;
  text-align: left;
}
.screenshot-gallery {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.screenshot {
  width: 33ex;
  max-width: 80%;
}
.tech-logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
</style>
