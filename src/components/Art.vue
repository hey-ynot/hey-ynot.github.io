<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <img src="src/assets/E3ZU7umX0AIF_QN.jpeg" alt="squid-man">
        <img src="src/assets/E33XIHUX0AUUAEN.jpeg" alt="eth-frog">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Art',
  data () {
    return {
      msg: 'Stuff I\'ve made'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  max-width: 80%;
}
a {
  color: #42b983;
}
img {
  max-width: 80%;
}
</style>
