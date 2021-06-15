<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Coming soon</h2>
  </div>
</template>

<script>
export default {
  name: 'Code',
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
