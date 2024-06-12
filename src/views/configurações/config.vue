<template>
  <v-card id="card">
    <v-card-title class="title"> Configurações</v-card-title>
    <v-tabs v-model="tab">
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one"> One </v-tabs-window-item>

        <v-tabs-window-item value="two"> Two </v-tabs-window-item>

        <v-tabs-window-item value="three"> Three </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({ value: 0, tab: null }),
};
</script>
<style scoped>
#card {
  height: 98.5%;
  border-radius: 20px;

  margin-bottom: 10px;
  margin-right: 10px;
}

.title {
  background-color: #2c2c2c;
  color: white;
}
</style>
