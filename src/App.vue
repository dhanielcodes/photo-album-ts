<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <input type="text" v-model="search" placeholder="search" name="" id="" />
  <div>
    <div v-for="(item, idx) in pics" :key="idx">
      {{ item.alt_description }}
      <img :src="item.urls.regular" alt="" sizes="" srcset="" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
      pictures: [],
    };
  },
  computed: {
    ...mapGetters({
      pics: "photos/searched",
    }),
    searched() {
      return this.pictures.filter((x) => {
        return x.alt_description.toUpperCase().match(this.search.toUpperCase());
      });
    },
  },
  methods: {
    ...mapActions({
      load: "photos/getPhotos",
    }),
  },
  created() {
    this.load();
    console.log(this.pics);
    this.pictures = this.pics;
  },
};
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
