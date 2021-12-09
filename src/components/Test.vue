<template>
  <div>Bob's place is {{ showText }}</div>
  <button @click="increaseFestiness" />
  <img
    src="https://cdn.discordapp.com/attachments/864062287102476311/915173193252208640/cover2_2.jpg"
  >
</template>

<script lang="ts" setup>
import { ref } from "vue";
interface Props {
  text?: string;
}
const props = withDefaults(defineProps<Props>(), {
  text: "gay",
});
const showText = ref(props.text);

const increaseFestiness = () => {
  showText.value += "+1";
};
</script>
