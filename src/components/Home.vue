<template>
  <ion-page class="ion-page" main>

    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Vue Tabs</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content >
      <ion-tabs>

        <ion-tab tab="tab1">
          <ion-vue-router/>
        </ion-tab>

        <ion-tab tab="tab2">
          <ion-vue-router name="tab2" />
        </ion-tab>

        <ion-tab-bar slot="bottom">

          <ion-tab-button tab="tab1">
            <ion-label>Home</ion-label>
            <ion-icon name="home"></ion-icon>
          </ion-tab-button>

          <ion-tab-button tab="tab2">
            <ion-label>Settings</ion-label>
            <ion-icon name="settings"></ion-icon>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>      
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Home",
  methods: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
