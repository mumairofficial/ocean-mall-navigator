<template>
  <div>
    <div class="mb-2">Advertisement</div>
    <div id="slider">
      <img class="mySlides" style="width: 50%;" :src="currentImage.thumbnail" alt>
    </div>
  </div>
</template>

<script>
import HttpWrapper from '../../utils/axios-http.wrapper'

export default {
  data: () => ({
    currentImage: null,
    allImages: null,
    intervalId: null
  }),
  
  created () {
    this.fetchAllImage();
    this.currentImage = {
      "id": "1",
      "title": "test",
      "display_time_sec": "5",
      "thumbnail": "http://gfinder.genislab.com/public/customers/ads/1.gif"
      }
  },

  destroyed () {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },

  methods: {
    fetchAllImage () {
      HttpWrapper.tokenOnlyHttp().get('/api/display/ads').then(
        ({ data }) => {
          const { ads } = data;
          this.allImages = [...ads];
          this.currentImage = ads[0];

          this._startAdsLoop()
        }
      )
    },

    _startAdsLoop () {
      const adsImages = [...this.allImages];
      const delay = adsImages[0].display_time_sec ? Number(adsImages[0].display_time_sec) : 5;

      const secondsToDeply = delay * 1000;
      let counter = 0;

      this.intervalId = setInterval(() => {

        this._setupImage(counter);
        counter++;

        if (counter === (adsImages.length)) {
          counter = 0;
        }

      }, secondsToDeply);
    },

    _setupImage (index) {
      this.currentImage = {...this.allImages[index]}
    }
  }
}
</script>

