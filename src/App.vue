<template>
  <div id="app">
    
    <img src="./assets/logo.png">
        <ul>
    <li><router-link to="/art">Art</router-link></li>
    <li><router-link to="/code">Code</router-link></li>
    </ul>

    <router-view/>
  </div>
  <!-- <div> -->

  <!-- </div> -->
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #3100e4;
}
.router-link-active {
  color: red;
}

</style>
