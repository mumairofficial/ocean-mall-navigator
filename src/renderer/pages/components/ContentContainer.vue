<template>
  <div class="flex flex-row mb-16">
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
      {{selectedLocation}}
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
          this.selectedLocation = [...this.locations[0]]
        }
      )
    },

    onSelectCategory(category) {
      this.selectedLocation = this.locations.filter(loc => loc.category === category.id)
      console.log(this.locations)
      console.log(this.selectedLocation)
    }
  },

  props: [ 'sectionFilter', 'themeAccent' ]
}
</script>
