<script lang="ts" setup>
</script>

<template>
  <div id="app">
    <h1 />
    <p>
      <router-link to="/">
        Go to Home
      </router-link>
      <router-link to="/about">
        Go to About
      </router-link>
    </p>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 700px;
}
fieldset {
  margin: 2rem;
  padding: 1rem;
}
</style>
