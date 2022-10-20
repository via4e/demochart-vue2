<template>
  <v-app>
    <topmenu class="d-none d-sm-block" />

    <v-container
      fluid
      pt-12
    >
      <bar-chart />
      <v-btn @click="update">
        Update
      </v-btn>
    </v-container>

    <footerBar />
  </v-app>
</template>

<script>

import topmenu from './components/App/TopMenu.vue'
import footerBar from './components/App/Footer.vue'
import BarChart from './components/App/BarChart.vue'

export default {
  name: 'App',
  components: {
    topmenu,
    footerBar,
    BarChart
  },
  data: () => ({ }),
  computed: {

  }
}
</script>

<style lang="scss" scoped>

</style>
