<template>
  <div>
    <h1 class="title">
      Behold! ...my stuff.
    </h1>
    <div class="exhibit-list">
      <Exhibit
        v-for="item in exhibits"
        :key="item.img"
        :img="item.img"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Exhibit from './Exhibit.vue';
import {shuffleArray} from '../../util/utils'

let exhibits:  {
	img: string,
	title: string,
	description: string
}[] = [
	{
		img: 'https://cdn.discordapp.com/attachments/864062287102476311/916205474104344626/20211203_165319.jpg',
		title: 'My fancy wireless mouse',
		description: "I've only used it about twice..."
	},
	{
		img: 'https://cdn.discordapp.com/attachments/864062287102476311/916206855842304020/20211203_165508.jpg',
		title: 'My not-so-fancy wallet',
		description: "Unfortunately also doesn't include any fat wads of cash inside"
	},
	{
		img: 'https://cdn.discordapp.com/attachments/864062287102476311/916206832379379712/20211203_165635.jpg',
		title: 'ROCK. AND. STOOOOONE.',
		description: 'Used to knock back mugs of Blackout Stout'
	},
	{
		img: 'https://cdn.discordapp.com/attachments/864062287102476311/916206824989028352/20211203_165829.jpg',
		title: 'My favourite snack',
		description: "I would live off these if I could"
	},
	{
		img: 'https://cdn.discordapp.com/attachments/864062287102476311/916207889637593138/20211203_170255.jpg',
		title: 'Cool sunnies',
		description: "Slip, slap, sunnies."
	},
	{
		img: 'https://cdn.discordapp.com/attachments/864062287102476311/916210249449496586/20211203_171212.jpg',
		title: 'Rubiks cube',
		description: "My personal best is 48 seconds"
	},
	{
		img: 'https://cdn.discordapp.com/attachments/864062287102476311/916210250095398942/20211203_171058.jpg',
		title: 'Bananas',
		description: "I use them to measure stuff"
	},
	{
		img: 'https://cdn.discordapp.com/attachments/864062287102476311/916210285671489536/20211203_171021.jpg',
		title: 'The Cluck of Chickthulu',
		description: "This thing is weird. Yes, it's supposed to be a chicken. No, I didn't intend for it to look realistic."
	},
	{
		img: 'https://cdn.discordapp.com/attachments/864062287102476311/917955747843801088/20211208_124752.jpg',
		title: 'Zer0 Pop',
		description: "Colour schemes are hard\nShould have payed more attention\nBack in VisCom class"
	},
	{
		img: 'https://cdn.discordapp.com/attachments/864062287102476311/917955748372303902/20211208_124618.jpg',
		title: 'Megumin figurine',
		description: "This will become a family heirloom"
	}
]
shuffleArray(exhibits);
</script>

<style>
@import '../../style.css';
.exhibit-list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(470px,1fr));
}
@media (max-width: 499px) {
	.exhibit-list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
}
}
</style>