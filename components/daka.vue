<template>
  <div class="main" v-if="wtfObj.data">
      <img src="/static/img/2.jpg" width="100%">
      <div class="dk">
        <img class="dk-img1" src="/static/img/1.jpg" width="100%">
          <img class="dk-img2" :src="wtfObj.data.data.user_info.avatar" @click="info">
        <div class="nickname">{{wtfObj.data.data.user_info.nickname}}</div>
        <div class="left"><p style="font-size:0.42rem;">{{wtfObj.data.data.sequent_count}}</p><p style="font-size:0.24rem;color:#7e7e7e;">累计打卡天数</p></div>
        <div class="right"><p style="font-size:0.42rem;">{{wtfObj.data.data.schedule}}</p><p style="font-size:0.24rem;color:#7e7e7e;">完成进度</p></div>
        <div class="end">距离打卡结束还有{{day}}天</div>
        <div class="wdk">{{display}}</div>
        <img @click="daka" class="an" src="/static/img/4.jpg">
        <img v-show="ok" class="an" src="/static/img/3.jpg">
      </div>
        <img class="tab" src="/static/img/5.jpg" width="100%">
        <div class="null">
        <div class="content">
          <div class="one">
            <div class="test1 xuefan1">排行</div>
            <div class="test2 xuefan1">昵称</div>
            <div class="test3 xuefan1">累计天数</div>
            <div class="test4 xuefan1">打卡进度</div>
          </div>
          <div class="two">
            <div class="xx0">
              <div class="test5 xuefan2">{{wtfObj.data.data.sort}}</div>
              <img class="two-img" :src="wtfObj.data.data.user_info.avatar">
            </div>
            <div class="test6 xuefan2">{{wtfObj.data.data.user_info.nickname}}</div>
            <div class="test7 xuefan2">{{wtfObj.data.data.sequent_count}}</div>
            <div class="test8 xuefan2">{{wtfObj.data.data.schedule}}</div>
          </div>
          <div class="roll">
            <div class="three" v-for="(item,index) in wtfObj.data.data.top_list" :key="index">
              <div class="xx1">
                <div :class="{test9a:index==0,test9b:index==1,test9c:index==2,test91:index>=3, 'xuefan3':true}">{{index + 1}}</div>
                <img class="three-img" :src="item.avatar">
              </div>
              <div class="test10 xuefan3">{{item.nickname}}</div>
              <div class="test11 xuefan3">{{item.sequent_count}}</div>
              <div class="test12 xuefan3">{{item.schedule}}</div>
            </div>
          </div>
        </div>
        </div>
        <div class="sharea">
          <img class="lefta" src="/static/img/2b.jpg">
          <a href="javascript:;"><img class="righta" src="/static/img/3a.jpg"></a>
        </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name:"daka",
  data(){
    return{
      day:365,
      display:'未打卡',
      ok:false,
      wtfObj:{},
      uid:'',
      top_list:[
        {
          avatar:'',
          nickname:'',
          sequent_count:'',
          schedule:'',
        },
        {
          avatar:'',
          nickname:'',
          sequent_count:'',
          schedule:'',
        },
      ]
    }
  },
  methods:{
    daka:function(event){
      this.display = '已打卡'
      this.ok = 'true'
    },
    info(){
      let that = this
      axios.post('http://actsdtest.qupeiyin.cn/ActDubbingSign/inner_index',
       { uid: '31050373'},
     )
      .then(function (res) {
        that.wtfObj = res;
        console.log(that.wtfObj);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },
  created(){
    this.info()
  }
}
</script>
<style lang="less">
.main {
  width: 100%;
  box-sizing: border-box;
  background-color: #ffefc5;
}
body{
  margin: 0;
  background-color: #fda425;
  width: 100%;
  height: 100%;
}
li{
  border-bottom: 0.02rem solid #fff4d6;
}
.lefta{
  float: left;
  width: 60%;
}
.righta{
  width: 40%;
}
.sharea{
  position: fixed;
  width: 100%;
  z-index: 100;
  bottom: 0;
}
.dk{
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.dk-img1{
  position: relative;
}
.dk-img2{
  border-radius: 50%;
  position: absolute;
  top: 0.3rem;
  left: 50%;
  margin-left: -0.91rem;
  width: 1.82rem;
  height: 1.82rem;
}
.xx0{
  width: 1.6rem;
  height: 0.72rem;
  display: flex;
  align-items: center;
}
.xx1{
  width: 1.6rem;
  height: 0.72rem;
  display: flex;
  align-items: center;
}
.xx2{
  width: 1.6rem;
  height: 0.72rem;
  display: flex;
  align-items: center;
}
.xx3{
  width: 1.6rem;
  height: 0.72rem;
  display: flex;
  align-items: center;
}
.xx4{
  width: 1.6rem;
  height: 0.72rem;
  display: flex;
  align-items: center;
}
.nickname{
  width: 100%;
  text-align: center;
  position: absolute;
  font-size: 0.24rem;
  top: 2.2rem;
  left: 0;
}
.left{
  position: absolute;
  text-align: center;
  color: #ff6528;
  top: 3.4rem;
  left: 1.4rem;
}
.right{
  position: absolute;
  text-align: center;
  color: #ff6528;
  top: 3.4rem;
  right: 1.7rem;
}
.end{
  width: 100%;
  left: 0;
  position: absolute;
  text-align: center;
  color: #c3c3c3;
  top: 4.5rem;
}
.wdk{
  position: absolute;
  color: #ffffff;
  left: 2.8rem;
  top: 5.7rem;
  font-size: 0.3rem;
}
.an{
  width: 1.52rem;
  position: absolute;
  right: 0.88rem;
  top: 5.4rem;
}
.null{
  width: 100%;
  height: 9rem;
}
.content{
  box-sizing: border-box;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  background-color: #ffffff;
  height: 8rem;
  border-bottom-left-radius: 0.35rem;
  border-bottom-right-radius: 0.35rem;
  box-shadow: 0 0.2rem 0.3rem #feb353;
}
.roll{
  box-sizing: border-box;
  background-color: #ffffff;
  height: 6.45rem;
  position: relative;
  border-bottom-left-radius: 0.35rem;
  border-bottom-right-radius: 0.35rem;
  padding:0 0.1rem;
  overflow: auto;
}
.one{
  width: 100%;
  height: 0.72rem;
  color: #ff8400;
  font-size: 0.24rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .test1{
   width: 1.6rem;
  }
  .test2{
    width: 1.6rem;
  }
  .test3{
    width: 1.6rem;
  }
  .test4{
    width: 1.6rem;
  }
  .xuefan1 {
    text-align: center;
    display: inline-block;
  }
}
.two{
  width: 96%;
  height: 0.72rem;
  margin: 0 2%;
  font-size: 0.24rem;
  background-color: #fff4d6;
  border-radius: 0.16rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  .two-img{
    border-radius: 50%;
    background-color: #575757;
    width: 0.5rem;
    height: 0.5rem;
    display: inline-block;
    position: absolute;
    margin-left: 0.8rem;
  }
  .test5{
    width: 0.9rem;
  }
  .test6{
    width: 1.6rem;
    vertical-align: middle;
  }
  .test7{
    width: 1.6rem;
  }
  .test8{
    width: 1.6rem;
  }
  .xuefan2 {
    text-align: center;
    display: inline-block;
    overflow: hidden;
    white-space:nowrap;
  }
}
.three{
  width: 100%;
  height: 0.72rem;
  font-size: 0.24rem;
  border-radius: 0.16rem;
  border-bottom: 0.02rem solid #fff4d6;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  .three-img{
    border-radius: 50%;
    border-style: solid;
    border-width: 0.05rem;
    border-color: #ffc834;
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    margin-left: 0.7rem;
  }
  .test9a{
    width: 0.9rem;
    height: 0.5rem;
    color: #ffffff;
    line-height: 0.5rem;
    font-weight: 800;
    text-align: center;
    background-color: #ffbc34;
    border-top-left-radius: 0.12rem;
    border-bottom-left-radius: 0.12rem;
  }
  .test9b{
    width: 0.9rem;
    height: 0.5rem;
    color: #ffffff;
    line-height: 0.5rem;
    text-align: center;
    font-weight: 800;
    background-color: #9d998f;
    border-top-left-radius: 0.12rem;
    border-bottom-left-radius: 0.12rem;
  }
  .test9c{
    width: 0.9rem;
    height: 0.5rem;
    color: #ffffff;
    line-height: 0.5rem;
    text-align: center;
    font-weight: 800;
    background-color: #926204;
    border-top-left-radius: 0.12rem;
    border-bottom-left-radius: 0.12rem;
  }
  .test91{
    width: 0.9rem;
    height: 0.5rem;
    color: #111111;
    line-height: 0.5rem;
    text-align: center;
    background-color: #ffffff;
    border-top-left-radius: 0.12rem;
    border-bottom-left-radius: 0.12rem;
  }
  .test10{
    width: 1.6rem;
    vertical-align: middle;
  }
  .test11{
    width: 1.6rem;
  }
  .test12{
    width: 1.6rem;
  }
  .xuefan3 {
    text-align: center;
    display: inline-block;
    overflow: hidden;
    white-space:nowrap;
  }
}
.four{
  width: 100%;
  height: 0.72rem;
  font-size: 0.24rem;
  border-radius: 0.16rem;
  border-bottom: 0.02rem solid #fff4d6;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  .four-img{
    border-radius: 50%;
    border-style: solid;
    border-width: 0.05rem;
    border-color: #a0a0a0;
    background-color: #575757;
    width: 0.6rem;
    height: 0.6rem;
    display: inline-block;
    position: absolute;
    margin-left: 0.7rem;
  }
  .test13{
    width: 0.9rem;
    height: 0.5rem;
    color: #ffffff;
    line-height: 0.5rem;
    background-color: #9a9892;
    border-top-left-radius: 0.12rem;
    border-bottom-left-radius: 0.12rem;
  }
  .test14{
    width: 1.6rem;
    vertical-align: middle;
  }
  .test15{
    width: 1.6rem;
  }
  .test16{
    width: 1.6rem;
  }
  .xuefan4{
    text-align: center;
    display: inline-block;
    overflow: hidden;
    white-space:nowrap;
  }
}
.five{
  width: 100%;
  height: 0.72rem;
  font-size: 0.24rem;
  border-radius: 0.16rem;
  border-bottom: 0.02rem solid #fff4d6;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  .five-img{
    border-radius: 50%;
    border-style: solid;
    border-width: 0.05rem;
    border-color: #986300;
    background-color: #575757;
    width: 0.6rem;
    height: 0.6rem;
    display: inline-block;
    position: absolute;
    margin-left: 0.7rem;
  }
  .test17{
    width: 0.9rem;
    height: 0.5rem;
    color: #ffffff;
    line-height: 0.5rem;
    background-color: #906003;
    border-top-left-radius: 0.12rem;
    border-bottom-left-radius: 0.12rem;
  }
  .test18{
    width: 1.6rem;
    vertical-align: middle;
  }
  .test19{
    width: 1.6rem;
  }
  .test20{
    width: 1.6rem;
  }
  .xuefan5 {
    text-align: center;
    display: inline-block;
    overflow: hidden;
    white-space:nowrap;
  }
}
.six{
  width: 100%;
  height: 0.72rem;
  font-size: 0.24rem;
  border-radius: 0.16rem;
  border-bottom: 0.02rem solid #fff4d6;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  .six-img{
    border-radius: 50%;
    background-color: #575757;
    width: 0.5rem;
    height: 0.5rem;
    display: inline-block;
    position: absolute;
    margin-left: 0.8rem;
  }
  .test21{
    width: 0.9rem;
  }
  .test22{
    width: 1.6rem;
    vertical-align: middle;
  }
  .test23{
    width: 1.6rem;
  }
  .test24{
    width: 1.6rem;
  }
  .xuefan6 {
    text-align: center;
    display: inline-block;
    overflow: hidden;
    white-space:nowrap;
  }
}
</style>
