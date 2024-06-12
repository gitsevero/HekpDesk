<template>
  <v-card id="main">
    <v-layout>
      <v-app-bar height="40" color="blue" flat>
        <v-app-bar-nav-icon
          @click="toggleRail"
          icon="mdi-menu"
        ></v-app-bar-nav-icon>

        <v-app-bar-title>HELP DESK</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn>
          <v-icon icon="mdi-bell-outline"></v-icon>
          <v-tooltip activator="parent" location="bottom"
            >Notificações</v-tooltip
          >
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer theme="dark" class="bg-blue" :rail="rail" permanent>
        <v-divider></v-divider>
        <router-link to="/home">
          <v-list-item
            prepend-icon="mdi-home-account"
            title="home"
            value="home"
          >
            <v-tooltip activator="parent" location="end"
              >home</v-tooltip
            ></v-list-item
          ></router-link
        >
        <v-list density="compact" nav>
          <router-link to="/chamados">
            <v-list-item
              prepend-icon="mdi-handshake"
              title="Chamados"
              value="Chamados"
            >
              <v-tooltip activator="parent" location="end"
                >Chamados</v-tooltip
              ></v-list-item
            ></router-link
          >

          <router-link to="/Chat">
            <v-list-item
              prepend-icon="mdi-forum"
              title="Chat de atendimento"
              value="Chat"
            >
              <v-tooltip activator="parent" location="end"
                >Chat de Atendimento</v-tooltip
              >
            </v-list-item></router-link
          >
          <router-link to="/config">
            <v-list-item
              prepend-icon="mdi-cog-outline"
              title="configurações"
              value="configurações"
            >
              <v-tooltip activator="parent" location="end"
                >configurações</v-tooltip
              >
            </v-list-item></router-link
          >
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <router-link to="/logout">
              <v-btn block> <v-icon icon="mdi-logout"></v-icon></v-btn>
            </router-link>
          </div>
        </template>
      </v-navigation-drawer>

      <v-main class="bg-blue" @click="rail = true">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
  methods: {
    toggleRail() {
      this.rail = !this.rail;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

* {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
}
a {
  text-decoration: none;
  color: white;
}

#main {
  height: 100%;
}
.v-layout {
  height: 100vh;
}
</style>
