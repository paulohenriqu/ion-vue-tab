<template>
  <ion-page class="ion-page" main>

    <ion-header>
      <ion-toolbar>
        <ion-title>Tabs Separate components</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-content" padding>

        
      

        
    
      <ion-tabs>
          <ion-tab>
          <ion-vue-router/>
        </ion-tab>
        

        <ion-tab-bar slot="bottom">

          <ion-tab-button  :class="{'tab-selected': selectedTab === 'tab1', 'tab-has-label' : true, 'tab-has-icon' : true, 'tab-layout-icon-top':true, 'ion-activatable':true, 'hydrated':true}" tab="tab1"  @click="changeTab('tab1')">
            <ion-label>Home</ion-label>
            <ion-icon name="home"></ion-icon>
          </ion-tab-button>

          <ion-tab-button :class="{'tab-selected': selectedTab === 'tab2', 'tab-has-label' : true, 'tab-has-icon' : true, 'tab-layout-icon-top':true, 'ion-activatable':true, 'hydrated':true}" tab="tab2"  @click="changeTab('tab2')">
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
  name: "Tabs",
  methods:{
      changeTab(tab){          
          this.selectedTab=tab;
          this.$router.push({ name: tab});
      }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      selectedTab: "tab1"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
