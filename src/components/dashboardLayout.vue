<template>
  <div>
    <v-app-bar>
      <v-spacer />
      <!-- <v-toolbar-title>Kouvee Petshop</v-toolbar-title> -->
      <v-spacer />
      <v-toolbar-items>
        <v-btn v-for="item in items" :key="item.title" @click="$router.push(item.to)">{{item.title}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isLandingPage() {
      return this.$route.name === "landingPage";
    }
  },
  data: function() {
    return {
      items: [
        {
          title: "Home",
          to: "/"
        },
        {
          title: "Produk",
          to: "/produk"
        }
      ],

      makeActive(item) {
        this.active = item;
      }
    };
  }
};
</script>

