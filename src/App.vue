<template>
  <div id="app" class="container">
    <cell v-for="(item, key) of shortcuts" :key="key" :shortcut="item.shortcut" :shortcut-description="item.shortcutDescription"></cell>
    <button class="fab" v-on:click="onAddButtonClick" >Add</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cell from './components/Cell.vue';
import { Shortcut } from './model/Shortcut';

@Component({
  components: {
    Cell,
  },
})
export default class App extends Vue {
  private shortcuts: Shortcut[] = [
    {id: 1, shortcut: 'ctr + b', shortcutDescription: 'some text ...'},
    {id: 2, shortcut: 'ctr + a', shortcutDescription: 'some text ...'},
  ];
  private onAddButtonClick() {
    this.shortcuts.push({id: 3, shortcut: 'shift + a', shortcutDescription: 'opis'});
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-break: 24px;
  font-size: 16px;  
}

.container {
  margin: 0 auto;
  width: 800px;
  display: grid;
  grid-template-columns: 400px 400px;
}

.fab {
  position: fixed;
  width: 56px;
  left: 50%;
  bottom: 15px;
  margin-left: -28px;
}

</style>
