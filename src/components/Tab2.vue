<template>
    <h2>Tab 2 Component</h2>
</template>

<script>
export default {
  name: "Tab2",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
   created(){
      console.log("CREATED TAB 2");
  },
  mounted(){
      console.log("MOUNTED TAB 2");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
