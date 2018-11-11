<template>
  <div id="wrapper">
    <div class="content">
      <div class="flex justify-between">
        <div class="px-8 py-6">
          <router-link to="/">
            <img src="~@/assets/oceanmall-logo.png" alt="ocean-mall">
          </router-link>
        </div>
        <div style="width: 400px;" class="text-right">
        </div>
      </div>
      
      <div class="flex justify-between">
        lively
      </div>

      <div style="position: fixed; bottom: 15px;" class="text-center w-full">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import AppFooter from './components/Footer';
export default {
  components: { AppFooter }
}
</script>

<style>

</style>
