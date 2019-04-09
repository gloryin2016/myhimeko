<template>
  <div id="content">
    <div class="top">
    <img src="/static/img/1a.jpg" width="100%">
    <div class="join"><span>{{number}}</span>人已经参与活动</div>
    </div>
    <div class="what">
      <p @click="info">aaaaaaa</p>
    </div>
    <div class="share">
      <img class="left" src="/static/img/2b.jpg">
      <a href="javascript:;"><img class="right" src="/static/img/3a.jpg"></a>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name:"baoming",
  data(){
    return{
      number:3654,
    }
  },
  methods:{
    info(){
      axios.post('http://actsdtest.qupeiyin.cn/ActDubbingSign/inner_index',
       { uid: '31050373'}
     )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    meso(){
      axios({
        method:'post',
        url:'http://actsdtest.qupeiyin.cn/account/userInfo/31050373',
        data:{
          firstName:'',
          lastName:'',
        }
      });
    }
  },
}
</script>
<style scoped>
.top{
  position: relative;
}
.join{
  position: absolute;
  color: #ffdf47;
  width: 100%;
  left: 0;
  text-align: center;
  font-size: 0.3rem;
  top: 3.9rem;

}
.left{
  float: left;
  width: 60%;
}
.right{
  width: 40%;
}
.share{
  position: fixed;
  width: 100%;
  z-index: 100;
  bottom: 0;
}
</style>
