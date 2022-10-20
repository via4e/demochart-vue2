<template>
  <v-app-bar
    app
    class="blue lighten-3"
    dense
  >
    {{ topMenuMessage }}
  </v-app-bar>
</template>

<script>

export default {
  name: 'Topmenu',

  data: () => ({
    topMenuMessage: 'Demo chart'
  })
}
</script>
