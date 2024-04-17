import { createStore } from 'vuex'

export default createStore({
  state: {
    cities: []
  },
  getters: {
    ALLCITIES (state) {
      return state.cities
    }
  },
  actions: {
    async fetchWeatherDataForCities ({ commit }) {
      const cityIdsToFetch = ['703448', '2643743', '5128638', '1699805', '3469034', '3435907']

      cityIdsToFetch.forEach(async (cityId) => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=a8659d580c28d90db90d9619e729c8cd`)
        if (response.ok) {
          const data = await response.json()
          // console.log(data)
          if (data.name) {
            const cityInfo = {
              cityname: data.name,
              img: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
              temperature: Math.round(data.main.temp - 273.15),
              situation: data.weather[0].description
            }
            commit('updateWeather', cityInfo)
          } else {
            console.error(`Помилка: Об'єкт 'data' для міста ${cityId} не містить властивості 'name'.`)
          }
        } else {
          console.error(`Помилка завантаження даних для міста ${cityId}: ${response.status} ${response.statusText}`)
        }
      })
    }
  },
  mutations: {
    updateWeather (state, cityInfo) {
      state.cities.push(cityInfo)
    }
  }
})
