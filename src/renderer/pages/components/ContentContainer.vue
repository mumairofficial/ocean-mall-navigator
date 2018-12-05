<template>
  <div class="mb-16">

    <div class="pt-8 mb-10">
      <span class="text-4xl text-white">{{pageTitle}} / {{selectedCategory}}</span>
    </div>

    <div class="flex">
      <div class="pr-8 overflow-y-auto" style="width: 300px;">
        <!-- {{categories}} -->
        <div v-for="c in categories" :key="c.id"
          class="w-full p-4 mb-2 rounded font-bold cursor-pointer"
          :class="themeAccent"
          @click="onSelectCategory(c)">
          {{c.title}}
        </div>
      </div>

      <div class="flex-1 overflow-y-auto" style="height: 70vh;">

        <div v-for="loc in selectedLocation" :key="loc.id">
          <div class="p-4 mb-4 bg-white rounded text-grey-darkest flex flex-column">
            <div class="mr-6 w-24 h-24">
              <img :src="loc.thumbnail" class="w-24 h-24" alt="">
            </div>

            <div>
              <div class="text-black font-bold text-xl mb-2">
                {{loc.title}}
                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#{{selectedCategory}}</span>
              </div>
              <div class="text-grey-darker text-base">{{loc.description}}</div>

              <div class="py-4">
                <span class="inline-block bg-yellow-lighter rounded-full px-3 py-1 text-sm font-semibold text-yellow-darker mr-2">#{{loc.floor}}</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import HttpWrapper from '@/utils/axios-http.wrapper';

export default {
  created() {
    this.getData();
  },
  
  data: () => ({
    selectedCategory: null,
    selectedLocation: null,
    categories: null,
    locations: null
  }),

  methods: {
    getData () {
      HttpWrapper.tokenOnlyHttp().get(`/api/display/locationInfo?filter=${this.sectionFilter}`).then(
        ({data}) => {
          const {categories, locations} = data;
          this.categories = [...categories]
          this.locations = [...locations]
          this.selectedLocation = this._getLocationBy(categories[0].id)
          this.selectedCategory = categories[0].title
        }
      )
    },

    onSelectCategory(category) {
      this.selectedCategory = category.title;
      this.selectedLocation = this._getLocationBy(category.id);
    },

    _getLocationBy(categoryId) {
      return this.locations.filter(loc => loc.category === categoryId);
    }
  },

  props: [ 'sectionFilter', 'themeAccent', 'pageTitle' ]
}
</script>
