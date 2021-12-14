<template>
  <div>
    <div class="grid-list">
      <GridItem
        v-for="item in projectList"
        :key="item.img" 
        class="item"
        :img="item.img"
        :title="item.title"
        :description="item.description"
        @click="router.push(item.path!)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import GridItem, {GridItemProps} from '@/components/GridItem.vue';
import router from '@/router';

document.title = 'Projects'

const projectList: Array<GridItemProps> = [
  {
    img: 'https://cdn.discordapp.com/attachments/864062287102476311/918675627941453846/Screenshot_2021-12-10_122848.png',
    title: '3D graphics',
    path: '/projects/cube'
  },
  {
    img: 'https://cdn.discordapp.com/attachments/864062287102476311/919824080583159808/thumbnail.jpg',
    title: 'Boored',
    description: 'Booru browser',
    path: '/projects/boored'
  },
  {
    img: '',
    title: ''
  },
  {
    img: '',
    title: ''
  }
];

</script>

<style>
.grid-list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(470px,1fr));
}
@media (max-width: 499px) {
	.grid-list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
}
}
</style>

<style scoped>
.item {
  cursor: pointer;
}
</style>