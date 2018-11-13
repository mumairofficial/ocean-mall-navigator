<template>
  <div id="wrapper">
    <video autoplay muted loop id="myVideo">
      <source src="~@/assets/ocean-mall-video.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    
    <div class="content flex justify-between">
      <div class="flex flex-col justify-between">
        <div class="text-3xl text-grey-light">
          <div class="px-8 py-6">
            <img src="~@/assets/oceanmall-logo.svg" style="width: 40%" alt="ocean-mall">
          </div>
        </div>

        <div class="mx-8 mb-24 flex flex-row">
          <home-navigation-bar />
        </div>
      </div>
      

      <div class="flex flex-col items-end justify-between">
        <div class="">
          <weather-widget></weather-widget>
        </div>

        <div class="text-right mt-6">
          <div class="mb-2">Advertisement</div>
          <div id="slider">
            <img class="mySlides" style="width: 50%;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" alt>
            <!-- <img class="mySlides" style="width: 20%;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/taj-mahal_copy.jpg" alt>
            <img class="mySlides" style="width: 20%;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ibiza.jpg" alt>
            <img class="mySlides" style="width: 20%;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ankor-wat.jpg" alt>
            <img class="mySlides" style="width: 20%;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" alt> -->
          </div>
        </div>
      </div>

      <div style="position: fixed; bottom: 15px;" class="text-center w-full">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import WeatherWidget from './components/WeatherWidget';
  import HomeNavigationBar from './components/HomeNavigationBar';
  import AppFooter from './components/Footer';
  export default {
    name: 'home-page',
    components: { WeatherWidget, AppFooter, HomeNavigationBar },
    created () {
      // setTimeout(() => {
      //   this.showDivs(1)
      // }, 1000);
    },
    mounted () {
    },
    methods: {
      showDivs (n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        x[slideIndex-1].style.display = "block";  
      }
    }
  }
</script>

<style>

  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
  }

  .content {
    position: fixed;
    background: rgba(0, 0, 0, 0.40);
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
    height: 100%;
  }
</style>
