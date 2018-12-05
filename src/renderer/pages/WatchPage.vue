<template>
  <div id="wrapper">
    <video autoplay muted loop id="myVideo">
      <source src="~@/assets/ocean-mall-video.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    
    <div class="content justify-between">
      <div class="">
        <div class="px-8 py-6">
          <logo />
        </div>

        <content-container 
            class="mx-8"
            sectionFilter="watch" 
            themeAccent="bg-red text-red-darkest hover:bg-red-light"
            pageTitle="Watch" />
      </div>

      <div style="position: fixed; bottom: 15px;" class="text-center w-full">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo';
import AppFooter from './components/Footer';
import ContentContainer from './components/ContentContainer';

export default {
  components: { AppFooter, ContentContainer, Logo },
}
</script>
