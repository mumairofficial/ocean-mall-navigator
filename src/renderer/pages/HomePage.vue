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
            <img src="~@/assets/oceanmall-logo.png" alt="ocean-mall">
          </div>
        </div>

        <div class="mx-8 mb-24 flex flex-row">
          <router-link tag="button" to="/navigation">
            <button class="mr-4 tracking-wide p-4 bg-blue hover:bg-blue-light text-white rounded-lg" style="width: 200px; height: 200px;">
              <svg class="fill-current w-16 h-16" aria-hidden="true" data-prefix="fas" data-icon="map" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" class=""></path></svg>
              <div class="text-2xl mt-2">
                Navigation
              </div>
            </button>
          </router-link>
          <button class="mr-4 tracking-wide p-4 bg-red-dark hover:bg-red-light text-white rounded-lg" style="width: 200px; height: 200px;">
            <svg class="fill-current w-16 h-16" aria-hidden="true" data-prefix="fas" data-icon="film" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z" class=""></path></svg>
            <div class="text-2xl mt-2">
              Watch
            </div>
          </button>
          
          <button class="mr-4 tracking-wide p-4 bg-green-dark hover:bg-green-light text-white rounded-lg" style="width: 200px; height: 200px;">
            <svg class="fill-current w-16 h-16" aria-hidden="true" data-prefix="fas" data-icon="gamepad" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M480 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160c44.8 0 85.2-18.4 114.2-48h91.5c29 29.6 69.5 48 114.2 48 88.4 0 160-71.6 160-160S568.4 96 480 96zM256 276c0 6.6-5.4 12-12 12h-52v52c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-52H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h52v-52c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h52c6.6 0 12 5.4 12 12v40zm184 68c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-80c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" class=""></path></svg>
            <div class="text-2xl mt-2">
              Play
            </div>
          </button>

          <button class="mr-4 tracking-wide p-4 bg-yellow-dark hover:bg-yellow-light text-white rounded-lg" style="width: 200px; height: 200px;">
            <svg class="fill-current w-16 h-16" aria-hidden="true" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg>
            <div class="text-2xl mt-2">
              Shop
            </div>
          </button>

          <button class="mr-4 tracking-wide p-4 bg-orange-dark hover:bg-orange-light text-white rounded-lg" style="width: 200px; height: 200px;">
            <svg class="fill-current w-16 h-16" aria-hidden="true" data-prefix="fas" data-icon="utensils" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 512" ><path fill="currentColor" d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z" class=""></path></svg>
            <div class="text-2xl mt-2">
              Eat
            </div>
          </button>
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
  import AppFooter from './components/Footer';
  export default {
    name: 'home-page',
    components: { WeatherWidget, AppFooter },
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
