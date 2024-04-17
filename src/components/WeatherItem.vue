<template>
    <div class="weather-col"
    v-for="city in ALLCITIES" :key="city.id"
    >
        <p class="current-city">{{ city.cityname }}</p>
        <hr>
        <img :src="city.img" alt="">
        <hr>
        <p class="current-temperature">{{ city.temperature }} <span v-html="degreeSymbol"></span></p>
        <hr>
        <p class="current-situation">{{ city.situation }}</p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      degreeSymbol: '&#8451;'
    }
  },
  computed: {
    ...mapGetters(['ALLCITIES'])
  },
  methods: {
    ...mapActions(['fetchWeatherDataForCities'])
  },
  async mounted () {
    this.fetchWeatherDataForCities()
  }
}
</script>

<style lang="scss" scoped>
    .weather-col {
      display: block;
      width: 200px;
      border: 2px solid rgb(4, 129, 4);
      border-radius: 5px;
      box-sizing: border-box;
      padding: 24px 16px;
    }
    .current-city {
      font-size: 24px;
      font-weight: 700;
    }
    .current-temperature {
      font-size: 18px;
      span{
        font-family: Avenir, Helvetica, Arial, sans-serif;
      }
    }
</style>
