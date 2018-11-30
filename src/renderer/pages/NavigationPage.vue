<template>
  <div id="wrapper">
    <div class="content">
      <div class="flex justify-between">
        <div class="px-8 py-6">
          <router-link to="/">
            <img src="~@/assets/oceanmall-logo.svg" style="width: 30%" alt="ocean-mall">
          </router-link>
        </div>
        <div style="width: 400px;" class="text-right">
        </div>
      </div>
      
      <section class="w-full pt-2">
        <!-- <div class="editor-window">
          <div class="window-mockup brown"></div>
          <div class="editor-body">
            <code>
              {<br>
                &nbsp;&nbsp;&nbsp;"id": "newlandmark",<br>
                &nbsp;&nbsp;&nbsp;"title": "New Landmark",<br>
                &nbsp;&nbsp;&nbsp;"description": "Creating a new landmark is that easy!",<br>
                &nbsp;&nbsp;&nbsp;"x": "<span class="mapplic-coordinates-x">0.0000</span>",<br>
                &nbsp;&nbsp;&nbsp;"y": "<span class="mapplic-coordinates-y">0.0000</span>",<br>
                &nbsp;&nbsp;&nbsp;...<br>
              }
            </code>
          </div>
        </div> -->

        <!-- Map -->
        <div id="mapplic"></div>
      </section>

      <div style="position: fixed; bottom: 15px;" class="text-center w-full">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import AppFooter from './components/Footer';
export default {
  components: { AppFooter },
  created () {
    this.loadMap();
  },
  mounted () {
    this.loadMap();
  },
  methods: {
    loadMap () {
      // $(document).ready(function() {
				var mapplic = $('#mapplic').mapplic({
					source: 'http://gfinder.genislab.com/api/customers/1/display/1/configurations',
          height: 840,
					sidebar: true,
					minimap: false,
					markers: false,
          fullscreen: true,
          lightbox: false,
					hovertip: true,
					developer: true,
					maxscale: 3
				});

				/* Landing Page */
				$('.usage').click(function(e) {
					e.preventDefault();
					$('.editor-window').slideToggle(200);
				});

				$('.editor-window .window-mockup').click(function() {
					$('.editor-window').slideUp(200);
				});
			// });
    }
  }
}
</script>

<style>
.mapplic-sidebar {
  width: 20%;
}

.mapplic-container {
  width: 80%;
}
</style>
