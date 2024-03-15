<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
       
        theme="dark" 
        class="bg-deep-purple"
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
      
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
        
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
     
        <router-link to="/">  <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item></router-link>
        <router-link to="/login">  <v-list-item prepend-icon="mdi-view-dashboard" title="login" value="login"></v-list-item></router-link>
        <router-link to="/about">   <v-list-item prepend-icon="mdi-forum" title="About" value="about"> </v-list-item></router-link> 
        </v-list>
        <template v-if="rail == false" v-slot:append>
        <div class="pa-2">
           <router-link to="/logout">
             <v-btn block> Logout </v-btn>
            </router-link> 
           </div>
        </template>
     
      </v-navigation-drawer>
     
      <v-main 
      class="d-flex justify-center align-center "
      @click="rail = true"
      style="min-height: 100vh;"
      > 
      <router-view/>
    </v-main>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
      }
    },
  }
</script>
<style>a{
  text-decoration: none;
  color: white;
}</style>