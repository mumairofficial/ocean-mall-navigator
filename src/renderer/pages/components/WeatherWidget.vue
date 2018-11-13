<template>
  <div class="weatherwidget-io" id="openweathermap-widget-15"></div>
</template>

<script>
export default {
  created () {
    this.renderWeatherWidget()
  },
  mounted () {
    this.renderWeatherWidget()
  },
  methods: {
    renderWeatherWidget () {
      window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
      window.myWidgetParam.push({id: 15,cityid: '1174872',appid: '9f295bd03cc5a23a696eb64e6db2d150',units: 'metric',containerid: 'openweathermap-widget-15',  });
      (function() {
        var script = document.createElement('script');script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
      })();
    }
  }
}
</script>

<style>
.weatherwidget-io {
  pointer-events: none;
}
</style>

