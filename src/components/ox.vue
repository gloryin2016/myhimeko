<template>
  <div id="content">
    <div class="top">
      <img src="http://www.51pptmoban.com/d/file/2014/01/23/f03220aa5cc066bea0d4d2d355365f18.jpg" width="100%">
        <img class="headImg" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2198458799,3572664891&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <div class="first">
        <img class="fImg" src="https://mu1.sinaimg.cn/square.240/weiyinyue.music.sina.com.cn/wpp_cover/64375254.jpg?v=1545212767">
        <audio class="dx" src="/static/music/Befall.mp3" controls="controls"></audio>
      </div>
      <div style="width:100%;height:0.3rem;"></div>
      <div class="second">
        <p>{{data}}</p>
        <div class="wtf">
          <tr>
            <th>序号</th>
            <th>商品名称</th>
            <th>商品价格</th>
            <th>购买数量</th>
            <th>高端操作</th>
          </tr>
          <tr v-for="sp in dsb">
            <td>{{sp.id}}</td>
            <td>{{sp.name}}</td>
            <td>{{sp.price}}</td>
            <td>
              <button v-bind:disabled="sp.count === 0" v-on:click='sp.count-=1'>-</button>
              {{sp.count}}
              <button v-on:click="sp.count+=1">+</button>
            </td>
            <td>
              <button v-on:click="sp.count=0">清除</button>
            </td>
          </tr>
          总价：${{totalprice()}}<br>
          <button v-on:click = "show = !show" class="one">购买</button>
      <transition name="bounce">
        <p v-if="show">您的余额好像不太够哟，来一发648吗？</p>
      </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { setInterval, clearInterval } from 'timers';
export default {
  name:"ox",
  data(){
    return{
      userObj:{},
      show:false,
      dsb:[
        {
          id:1,
          name:'what the fk ',
          price:'5999',
          count:1
        },
        {
          id:2,
          name:'what the fk ',
          price:'7988',
          count:1
        },
        {
          id:3,
          name:'what the fk ',
          price:'8420',
          count:1
        },
        {
          id:4,
          name:'what the fk ',
          price:'9999',
          count:1
        },
      ]
    }
  },
  methods:{
    info(){
      let that = this
      axios.post('http://actsdtest.qupeiyin.cn/ActDubbingSign/inner_index',
       { uid: '31050373'},
     )
      .then(function (response) {
        that.userObj=response
        console.log(that.userObj);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    totalprice:function(){
      var totalp = 0;
      for(var i = 0,len = this.dsb.length;i<len;i++) {
        totalp+=this.dsb[i].price*this.dsb[i].count;
      }
      return totalp;
    }
  },
}
</script>
<style scoped>
.button{
  
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.top{
  position: relative;
}
th{
  height: 0.5rem;
}
th,td{
  border-bottom: 0.01rem solid #ddd;
}
.headImg{
  width: 1.6rem;
  height: 1,6rem;
  border-radius: 50%;
  border:0.05rem solid #ffffff;
  display: block;
  position: absolute;
  top: 3.6rem;
  left: 0.5rem;
}
.content{
  box-sizing: border-box;
  padding: 0.2rem 0.3rem;
  display: block;
}
.first{
    width: 100%;
    height:1rem;
    border-radius: 0.15rem;
    box-shadow: rgb(11, 234, 235)0px 0px 0.3rem inset;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 0.3rem;
  }
  .fImg{
    width: 0.9rem;
    height: 0.9rem;
  }
  .second{
    box-sizing: border-box;
    width: 100%;
  }
  .wtf{
    border-radius: 0.15rem;
    width: 100%;
    height: 7.5rem;
    box-shadow: rgb(247, 112, 202)0px 0px 0.3rem inset;
    box-sizing: border-box;
    padding: 0.3rem 0.3rem;
  }
  .p{
    font-size: 8rem;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(73, 247, 102);
    text-shadow: 0 0 0.2rem #f87,
                -0 -0 0.2rem #f87;
  }
  .one{
    position: absolute;
    left: 50%;
    margin-left: -0.75rem;
    width: 1.5rem;
    height: 0.8rem;
    border:0.03rem solid #fc4680;
    border-radius: 0.15rem;
    outline: none;
    box-shadow: rgb(11, 234, 235)0px 0px 0.3rem inset;
    opacity: 0.4;
  }
</style>
