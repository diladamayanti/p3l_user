<template>
  <v-container fluid>
    <v-data-iterator
      :items="produks"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <v-text-field
            v-model="search"
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
              <v-btn large depressed color="blue" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="blue" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.idProduk" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img height="250" :src="$apiUrl + 'produk/' + item.idProduk + '/gambar'"></v-img>
              <v-card-title class="subheading font-weight-bold">{{ item.namaProduk }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item v-for="(key, index) in filteredKeys" :key="index">
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

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn dark text color="primary" class="ml-2" v-on="on">
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">Page {{ page }} of {{ numberOfPages }}</span>
          <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
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
      return Math.ceil(this.produks.length / this.itemsPerPage);
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

          