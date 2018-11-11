<template>
  <div class="text-white text-sm">
    Design & Developed by GenisLab &copy; {{getYear}}
  </div>
</template>

<script>
export default {
  computed: {
    getYear () {
      const date = new Date();
      return date.getFullYear();
    }
  }
}
</script>
