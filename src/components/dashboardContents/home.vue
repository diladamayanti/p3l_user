<template>
  <!-- <v-app light> -->
  <v-content>
    <section>
      <v-parallax :src="imageLink.sub_main" height="600">
        <v-layout column align-center justify-center class="white--text">
          <h1
            class="white--text mb-2 display-3 text-xs-center"
            style="font-weight: 900; text-shadow: 3px 2px #000000"
          >KOUVEE PETSHOP</h1>
          <div
            class="white--text subheading mb-3 display-1 text-xs-center"
            style="font-weight: 900; text-shadow: 2px 2px #000000"
          >Pet Supplies, Accessories and Products Online</div>
          <!-- <v-btn class="blue lighten-2 mt-5" dark large href="/">Get Started</v-btn> -->
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3 pb-5">
          <div class="text-xs-center">
            <h2 class="headline">Kouvee Pet Shop for a variety of pet food, supplies, and services.</h2>
          </div>
        </v-flex>

        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-layout justify-center>
                    <v-icon x-large class="blue--text text--lighten-1">mdi-earth</v-icon>
                  </v-layout>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Pet Center</div>
                  </v-card-title>
                  <v-card-text>We believe that it is our responsibility to provide the best products that will make your furry babies jump and purr and to share our knowledge. Keep your beloved animal companions happy and healthy.</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-layout justify-center>
                    <v-icon x-large class="blue--text text--lighten-2">mdi-gift</v-icon>
                  </v-layout>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Reward Yourself</div>
                  </v-card-title>
                  <v-card-text>This is how you determine where you live, what you do for income, who you spend your time with. With little risk comes little reward, while the opposite is also true. So get out of your comfort zone and start living life with heightened dopamine levels.</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-layout justify-center>
                    <v-icon x-large class="blue--text text--lighten-2">mdi-human</v-icon>
                  </v-layout>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Create New Friends</div>
                  </v-card-title>
                  <v-card-text>Don't you think it would be easier to find nice people to interact with? This place is both local and global and help you to connect without limitations with people from your city, your state and your universe!</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="imageLink.sub_main" height="380">
        <v-layout column align-center justify-center>
          <div
            class="headline white--text mb-3 text-xs-center"
          >Pack your bags. We're going on vacation!</div>
          <em>Plan your perfect trip</em>
          <v-btn class="blue lighten-2 mt-5" dark large href="/">Get more info</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <v-footer padless class="grey darken-3">
      <v-col class="text-center" cols="12">
        <strong>Copyright © KouveePetshop 2020</strong>
      </v-col>
    </v-footer>
  </v-content>
  <!-- </v-app> -->
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      imageLink: {
        sub_main:
          "https://www.hillspet.co.id/content/dam/cp-sites/hills/hills-pet/en_us/img/article/lab-and-jack-russell-playing-tug-of-war-with-disc.jpg",
        cover:
          "http://www.4kwallpaperhd.com/wp-content/uploads/2018/05/Waterfall-River-photo-wallpaper-4k-3840x2160.jpg"
      }
    };
  },

  // components: {
  //   dialog
  // },

  methods: {},

  computed: {
    imgHeight: function() {
      var offset = 320;
      window.console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    }
  },

  mounted: function() {
    //this.calculateHeight();
  }
};
</script>


<style scoped>
.footer {
  display: flex;
}
</style>