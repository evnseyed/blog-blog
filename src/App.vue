<template>
  <div id="app">
    <div v-if="currentUserName">
      {{ 'Hello, ' + currentUserName +'!'}}
    </div>

    <input v-model="email" placeholder="email">
    <input v-model="password" placeholder="password">
    
    <button @click="$store.dispatch('registerUser')">
      Register
    </button>
    <button @click="$store.dispatch('logIn')">
      Sign In
    </button>
    <button @click="$store.dispatch('logOut')">
      Sign Out
    </button>

    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('subscribeToUserAuth')
  },
  computed: {
    email: {
      set(newValue) {
        this.$store.commit('setLoginEmail', newValue)
      },
      get() {
        return this.$store.state.loginData.email
      }
    },  
    password: {
      set(newValue) {
        this.$store.commit('setLoginPassword', newValue)
      },
      get() {
        return this.$store.state.loginData.password
      }
    },
    currentUserName() {
      return this.$store.state.authUser?.email
    }
  }
}
</script>
