<template>
  <div id="app">
    <search :q="q" />
    <template v-for="(user, index) in filtered">
      <card :key="index" :user="user" :q="q" />
    </template>
  </div>
</template>

<script>
import Search from '@/components/Search'
import Card from '@/components/Card'
export default {
  components: {
    Search,
    Card
  },
  data: () => ({
    users: [],
    error: null
  }),
  computed: {
    q () {
      return this.$route.path.split('/')[2] || ''
    },
    filtered () {
      const re = new RegExp(this.q, 'ig')
      return this.users.filter(u => Object.values(u).join().match(re))
    }
  },
  async created () {
    try {
      const res = await fetch('/api/users')
      this.users = await res.json()
    } catch (err) {
      this.error = err
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #EEEEEE;
  display: grid;
  align-items: center;
  justify-items: center;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.87);
  width: 564px;
  height: 643px;
  overflow: auto;
  padding: 19px 12px 0;
  background-color: #FFFFFF;
}
</style>
