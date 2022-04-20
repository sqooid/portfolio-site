<template>
  <div class="content-wrapper">
    <div class="width-limiter content">
      <h1 style="text-align: center">Save Backup</h1>
      <p>
        Source code and releases:
        <a href="https://github.com/sqooid/save-backup" class="link">
          https://github.com/sqooid/save-backup
        </a>
      </p>
      <p>
        This was a small exploration of Rust (most loved language on Stack
        Overflow!) powered by a sudden and irrational fear of losing precious
        game saves. The performance and optimization afforded by Rust were
        important for an application that was intended to run at all times in
        the background.
      </p>
      <p>
        The main benefit of this application over something like the native
        Windows File History is the simple and flexible configuration of what
        gets backed up, where and when, using a config file. Such settings
        include:
      </p>
      <ul>
        <li>how often to check for changes</li>
        <li>how many backups to keep stored</li>
        <li>whitelist/blacklist files from the backup</li>
        <li>compression of the backup files</li>
      </ul>
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
