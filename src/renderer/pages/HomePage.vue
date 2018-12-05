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
      

      <div class="flex flex-col items-end justify-between" style="width: 60%">
        <weather-widget />

        <div class="text-right mt-6">
          <advertisement />
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
  import Advertisement from './components/Advertisement';
  export default {
    name: 'home-page',
    components: { WeatherWidget, AppFooter, HomeNavigationBar, Advertisement },
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
