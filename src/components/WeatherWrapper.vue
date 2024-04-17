<template>
    <div class="weather-panel">
        <weather-item></weather-item>
    </div>
</template>

<script>
import WeatherItem from './WeatherItem.vue'
export default {
  components: { WeatherItem }
}
</script>

<style lang="scss" scoped>
    .weather-panel{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 25px;
    }
</style>
