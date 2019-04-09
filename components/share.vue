<template>
  <div class="wtf">
    <img class="main" src="/static/img/share.jpg" width="100%">
    <div class="aaa">
      <img class="dogimg" src="/static/img/dog.jpg">
      <div class="hold">我在[趣配音]坚持配音{{day}}天</div>
    </div>
  </div>
</template>
<script>
export default {
  name:"share",
  data(){
    return{
      day:22,
    }
  },
}
</script>
<style scoped>
body{
  margin: 0;
  padding: 0;
}
.main{
  position: relative;
  display: inline-block;
}
.aaa{
  display: inline-block;
  position: absolute;
  width: 100%;
  top: 4rem;
  text-align: center;
}
.dogimg{
  display: inline-block;
  width: 0.92rem;
  height: 0.92rem;
  border-radius: 50%;
}
.hold{
  display: inline-block;
  color: #575757;
  font-weight: 600;
}
</style>

