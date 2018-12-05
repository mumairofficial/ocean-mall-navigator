<template>
  <div id="wrapper">
    <video autoplay muted loop id="myVideo">
      <source src="~@/assets/ocean-mall-video.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    
    <div class="content flex justify-between">
      <div class="flex flex-col">
        <div class="text-3xl text-grey-light">
          <div class="px-8 py-6">
            <logo />
          </div>
        </div>

        <div class="mx-8 pt-12 flex flex-row">
          <div class="text-4xl text-yellow-dark">Services</div>
        </div>

        <div class="mx-8 pt-12 flex flex-row">
          <content-container sectionFilter="servce" />
        </div>
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
