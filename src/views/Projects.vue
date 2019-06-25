<template>
    <div>
        <h1>Projects</h1>
        <Project
                class="project"
                v-for="(project, index) in projects"
                :key="index"
                :title="project.title"
                :description="project.description"
                :link="project.link"
                :icon="project.icon">
        </Project>
    </div>
</template>

<script>
import Project from '../components/Project.vue';

export default {
  name: 'Projects',
  components: { Project },
  data: () => ({
    projects: [
      {
        title: 'Browser Fingerprint Visualization',
        description: 'A graphical representation of your browser fingerprint',
        link: {
          route: 'fingerprint',
          label: 'Demo Website',
        },
        icon: {
          name: 'fingerprint',
          group: 'fas',
        },
      },
      {
        title: 'Evil Trap Site',
        description: 'A collection of web experiments that abuse browser mechanics or bugs to slow / crash the browser, or spam and phish the user (Mostly targeting Firefox)',
        link: {
          url: new URL('https://evil.pbz.pw'),
          label: 'Demo Website',
        },
        icon: {
          name: 'firefox',
          group: 'fab',
        },
      },
      {
        title: 'Tallcraft',
        description: 'A Minecraft multiplayer server network online since 2011',
        link: {
          url: new URL('https://tallcraft.com'),
          label: 'Website',
        },
        icon: {
          name: 'gamepad',
          group: 'fas',
        },
      },
      {
        title: '{Bukkit, Spigot, Paper} Plugins',
        description: 'Minecraft server software extensions',
        link: {
          url: new URL('https://github.com/Tallcraft'),
          label: 'Source on GitHub',
        },
        icon: {
          name: 'puzzle-piece',
          group: 'fas',
        },
      },
      {
        title: 'CaptiveLogin',
        description: 'NodeJS powered CLI application to automatically login to various captive portals',
        icon: {
          name: 'wifi',
          group: 'fas',
        },
      },
    ],
  }),
};
</script>

<style scoped>
    * >>> h2  {
        font-size: 1.5em;
    }
    .project {
        margin-bottom: 2em;
    }
</style>
