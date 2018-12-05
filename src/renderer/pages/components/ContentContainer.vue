<template>
  <div class="flex flex-row w-full mb-16">
    <div class="pr-8 overflow-y-auto" style="width: 300px;">
      <!-- {{categories}} -->
      <div v-for="c in categories" :key="c.id"
        class="w-full p-4 mb-2 rounded font-bold cursor-pointer"
        :class="themeAccent"
        @click="onSelectCategory(c)">
        {{c.title}}
      </div>
    </div>

    <div class="flex-1 overflow-y-auto">
      <!-- {{selectedLocation}} -->
      <div v-for="loc in selectedLocation" :key="loc.id" class="flex">
        <div class="p-4 mb-4 bg-white rounded text-grey-darkest flex-1">
          <div>{{loc.title}}</div>
        </div>
      </div>
    </div>
    <div>
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
        }
      )
    },

    onSelectCategory(category) {
      this.selectedLocation = this._getLocationBy(category.id);
    },

    _getLocationBy(categoryId) {
      return this.locations.filter(loc => loc.category === categoryId);
    }
  },

  props: [ 'sectionFilter', 'themeAccent' ]
}
</script>
