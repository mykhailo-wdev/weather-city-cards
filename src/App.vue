<template>
  <weather-wrapper></weather-wrapper>
</template>

<script>
import WeatherWrapper from './components/WeatherWrapper.vue'
export default {
  name: 'App',
  components: { WeatherWrapper }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
