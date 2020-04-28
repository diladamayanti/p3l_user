<template>
  <v-container fluid>
    <v-data-iterator
      :items="produks"
      :page="page"
      :search="keyword"
      :sort-by="sortBy"
      :sort-desc="sortDesc"
      :items-per-page="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="blue-grey darken-2" class="mb-1">
          <v-text-field
            v-model="keyword"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-sort"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="grey" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="grey" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default>
        <v-row>
          <v-col v-for="item in produks" :key="item.namaProduk" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img height="250" :src="$apiUrl + 'produk/' + item.idProduk + '/gambar'"></v-img>

              <v-card-title class="subheading font-weight-bold">{{ item.namaProduk }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item v-for="(key, index) in keys" :key="index">
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'blue--text': sortBy === key }"
                  >{{ item[key] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>

  <!-- <div>
    <h2 class="text-center">Produk</h2>

    <v-container fluid>
      <v-row>
        <v-col v-for="(item, i) in produks" :key="i" cols="3" class="mx-auto">
          <v-card class="mx-auto my-12" max-width="374" outlined>
            <v-img height="250" :src="$apiUrl + 'produk/' + item.idProduk + '/gambar'"></v-img>

            <v-card-title>{{item.namaProduk}}</v-card-title>

            <v-card-text>
              <div class="my-3 subtitle-1">ID Produk: {{item.idProduk}}</div>
              <div class="my-3 subtitle-1">Harga Produk: {{ item.harga }}</div>
              <div class="my-3 subtitle-1">Stok Produk: {{ item.stok }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>-->
</template>
    

<script>
export default {
  data: () => ({
    dialog: false,
    items: [],
    keyword: "",
    errors: "",
    konfirmasi: false,
    valid: true,
    produks: [],

    itemsPerPageArray: [4, 8, 12],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 4,
    sortBy: "name",
    keys: ["idProduk", "harga", "stok"]
    // keys: [
    //   "Name",
    //   "Calories",
    //   "Fat",
    //   "Carbs",
    //   "Protein",
    //   "Sodium",
    //   "Calcium",
    //   "Iron"
    // ],
    // items: [
    //   {
    //     name: "Frozen Yogurt",
    //     calories: 159,
    //     fat: 6.0,
    //     carbs: 24,
    //     protein: 4.0,
    //     sodium: 87,
    //     calcium: "14%",
    //     iron: "1%"
    //   },
    //   {
    //     name: "Ice cream sandwich",
    //     calories: 237,
    //     fat: 9.0,
    //     carbs: 37,
    //     protein: 4.3,
    //     sodium: 129,
    //     calcium: "8%",
    //     iron: "1%"
    //   },
    //   {
    //     name: "Eclair",
    //     calories: 262,
    //     fat: 16.0,
    //     carbs: 23,
    //     protein: 6.0,
    //     sodium: 337,
    //     calcium: "6%",
    //     iron: "7%"
    //   },
    //   {
    //     name: "Cupcake",
    //     calories: 305,
    //     fat: 3.7,
    //     carbs: 67,
    //     protein: 4.3,
    //     sodium: 413,
    //     calcium: "3%",
    //     iron: "8%"
    //   },
    //   {
    //     name: "Gingerbread",
    //     calories: 356,
    //     fat: 16.0,
    //     carbs: 49,
    //     protein: 3.9,
    //     sodium: 327,
    //     calcium: "7%",
    //     iron: "16%"
    //   },
    //   {
    //     name: "Jelly bean",
    //     calories: 375,
    //     fat: 0.0,
    //     carbs: 94,
    //     protein: 0.0,
    //     sodium: 50,
    //     calcium: "0%",
    //     iron: "0%"
    //   },
    //   {
    //     name: "Lollipop",
    //     calories: 392,
    //     fat: 0.2,
    //     carbs: 98,
    //     protein: 0,
    //     sodium: 38,
    //     calcium: "0%",
    //     iron: "2%"
    //   },
    //   {
    //     name: "Honeycomb",
    //     calories: 408,
    //     fat: 3.2,
    //     carbs: 87,
    //     protein: 6.5,
    //     sodium: 562,
    //     calcium: "0%",
    //     iron: "45%"
    //   },
    //   {
    //     name: "Donut",
    //     calories: 452,
    //     fat: 25.0,
    //     carbs: 51,
    //     protein: 4.9,
    //     sodium: 326,
    //     calcium: "2%",
    //     iron: "22%"
    //   },
    //   {
    //     name: "KitKat",
    //     calories: 518,
    //     fat: 26.0,
    //     carbs: 65,
    //     protein: 7,
    //     sodium: 54,
    //     calcium: "12%",
    //     iron: "6%"
    //   }
    // ]
  }),
  methods: {
    getData() {
      var uri = this.$apiUrl + "produk";
      this.$http.get(uri, this.produk).then(response => {
        this.produks = response.data.produk;
      });
    },

    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    }
  },

  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },

    filteredKeys() {
      return this.keys.filter(key => key !== `Name`);
    }
  },

  mounted() {
    this.getData();
  }
};
</script>

          