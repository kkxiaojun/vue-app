<template>
  <div class="home">
    <header>
      app程序
    </header>
    <h3>姓名：{{userInfo.account}}</h3>
    <h3>身份证：{{userInfo.idCard}}</h3>
    <h3>所属机构：{{userInfo.organizeName}}</h3>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created() {
    console.log(this.userInfo)
  },
  methods: {
    back() {
      history.go(-1)
    }
  }
}
</script>
<style lang="less">
  header{
    background: #a2d3f7;
    height: 40px;
    line-height: 40px;
    .left{
      font-size: 1.5rem;
      float: left;
      margin-left: 10px;
      color: blue;
    }
  }
</style>
