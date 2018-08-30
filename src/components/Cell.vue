<template>
  <div class="cell">
      <h2>{{ shortcut }}</h2>
      <p>
        <i>{{ shortcutDescription }}</i>
      </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    shortcut: String,
    shortcutDescription: String,
  },
})

export default class Cell extends Vue {

}
</script>

<style scoped>

.cell {
}
h2{
  font-weight: bold;
  text-align: left;
  margin-left: 30px;
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 18px
}

p {
    text-align: left;
    margin-left: 20px;
    margin-bottom: 12px;
}
</style>




