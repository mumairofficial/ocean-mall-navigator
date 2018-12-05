<template>
  <div class="flex flex-row mb-16">
    <div class="pr-8 overflow-y-auto" style="width: 300px;">
      {{categories}}

    </div>

    <div class="flex-1 overflow-y-auto">
      {{locations}}
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
    resp: null,
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
        }
      )
    }
  },

  props: [ 'sectionFilter' ]
}
</script>
