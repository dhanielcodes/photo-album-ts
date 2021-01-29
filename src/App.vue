<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
   <div v-for="(item, idx) in pictures" :key="idx">
    {{item}}
   </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'App',
  data() {
    return {
    }
  },
  methods:{
    ...mapActions({
      load: 'photos/getPhotos'
    })
  },
  computed:{
    ...mapGetters({
      pictures: "photos/pics"
    })
  },
  created(){
    this.load()
    console.log(this.pictures)
  }

});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
