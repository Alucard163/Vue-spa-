<template>
  <v-app>
    <v-navigation-drawer
            app
            temporary
            v-model="drawer"
    >
      <v-list>
        <v-list-item
                v-for="link of links"
                :key="link.title"
                :to="link.url"
        >
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
              class="hidden-md-and-up"
              @click="drawer = !drawer"/>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">
          Ad application
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
                v-for="link in links"
                :key="link.title"
                :to="link.url"
                text>
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <template v-if="error">
      <v-snackbar
              :color="error"
              :multi-line="true"
              :timeout="5000"
              :value="true"
              @input="closeError"
      >
        {{ error }}
        <v-btn
                dark
                text
                @click="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    //HelloWorld,
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  },
  data: () => ({
      drawer: null,
      links: [
        {title: 'Login', icon: 'mdi-lock', url: '/login'},
        {title: 'Registration', icon: 'mdi-face', url: '/registration'},
        {title: 'Orders', icon: 'mdi-bookmark', url: '/orders'},
        {title: 'New ad', icon: 'mdi-plus', url: '/new'},
        {title: 'My ads', icon: 'mdi-dialpad', url: '/list'}
      ]
  }),
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>