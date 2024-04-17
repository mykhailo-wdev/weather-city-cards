<template>
    <div class="weather-panel">
        <div class="weather-cards">
            <weather-item></weather-item>
        </div>
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
        display: block;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 16px;
    }
    .weather-cards{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 25px;
    }
</style>
