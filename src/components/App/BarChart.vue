<template>
  <div class="container">
    <Bar
      v-if="loaded"
      :chart-data="chartData"
    />
  </div>
</template>

<script>

import axios from 'axios'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false

    try {
      const url = 'https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30'
      const response = await axios.get(url)

      const data = response.data?.Data?.Data

      const times = data.map(obj => Math.round(obj.time / 10000 - 166200))
      const prices = data.map(obj => Math.round(obj.high))

      this.chartData = { times, prices }

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
