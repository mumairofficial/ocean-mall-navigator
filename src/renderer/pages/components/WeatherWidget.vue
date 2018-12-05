<template>
  <div>
    <div class="rounded text-black" v-if="currentWeather.name" style="background: #ffd025; width: 300px;">
      <div class="flex justify-between items-center p-4 ">
        <div>
          <div class="font-semibold" style="font-size: 18px;">{{currentWeather.name}}, {{currentWeather.sys.country}}</div>
          <div>{{currentWeather.weather[0].description}}</div>
        </div>
        <img :src="`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`" alt="">
      </div>
      
      <div class="bg-white p-4 flex items-center">
        <div class="font-bold" style="font-size: 26px;">
          {{currentWeather.main.temp}}°C
        </div>
        <div class="flex-1 ml-3 text-sm">
          <div class="border-b border-blue mb-1">
            <strong>Details</strong>
          </div>
          <dl>
            <dd class="inline-block mr-4">Feels like</dd>
            <dt class="inline-block font-semibold">{{currentWeather.main.temp_max}}°C</dt>
            <dd class="inline-block mr-10">Wind</dd>
            <dt class="inline-block font-semibold">{{currentWeather.wind.speed}} m/s</dt>
            <dd class="inline-block mr-4">Humidity</dd>
            <dt class="inline-block font-semibold">{{currentWeather.main.humidity}}%</dt>
            <dd class="inline-block mr-5">Pressure</dd>
            <dt class="inline-block font-semibold">{{currentWeather.main.pressure}} hPa</dt>
          </dl>
        </div>
      </div>

      <div  class="p-2 text-center">
        {{dateAndTime}}
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    currentWeather: {},
    dateAndTime: '',
    interval: null
  }),
  created () {
    this.renderWeatherWidget()
    this.interval = setInterval(() => { this.startClock() }, 1000);
  },
  beforeDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  mounted () {
    this.renderWeatherWidget()
  },
  methods: {
    renderWeatherWidget () {
      fetch('http://api.openweathermap.org/data/2.5/weather?id=1174872&units=metric&appid=9f295bd03cc5a23a696eb64e6db2d150')
        .then(stream => stream.json())
        .then(data => {
          this.currentWeather = data;
        });
    },

    startClock () {
      this.dateAndTime = new Date().toLocaleString()
    }
  }
}
</script>

<style>
.weatherwidget-io {
  pointer-events: none;
}
</style>

