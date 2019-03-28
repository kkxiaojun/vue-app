<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>1hahahnizaizuosmne</li>
      <li>2hahahnizaizuosmne</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color: #ccc;
ul>li{
  font-size: 18px;
  width: 500px;
  float: left;
  background-color: $color;
}
h1, h2 {
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
  color: #42b983;
}
</style>
