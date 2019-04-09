<template>
  <div class="bh">
    <video autoplay loop style="width: 100%">
      <source src="/static/video/red-rose.mp4">
    </video>
    <transition name="others">
    <div class="top" v-if="show">
      <p>
        <i><b>Lv.999
          <span>我变秃了也变强了</span></b>
        </i>
      </p>
      <!--第一组-->
      <img class="jyt" src="/static/bh/jyt.png">
      <img class="tl" src="/static/bh/tl.png">
      <img class="bjt1" src="/static/bh/bjt.png">
      <div class="time">{{date}}</div>
      <!--第二组-->
      <img class="jh1" src="/static/bh/jh.png">
      <img class="jb" src="/static/bh/jb.png">
      <img class="bjt2" src="/static/bh/bjt.png">
      <img class="jh2" src="/static/bh/jh.png">
      <div class="second">周一</div>
      <!--第三组-->
      <img class="sj" src="/static/bh/sj.png">
      <img class="bjt3" src="/static/bh/bjt.png">
      <img class="jh3" src="/static/bh/jh.png">
      <div class="third">晴/21℃-7℃</div>
    </div>
    </transition>
    <div class="left">
      <a v-on:click="show = !show">
        <img :class="{btn:show,btn1:!show}" src="/static/bh/btn2.png">
      </a>
      <transition name="leftcopy">
        <div v-if="show">
        <img class="yx" src="/static/bh/yx.png">
        <p class="zt1">
          <i>私信</i>
        </p>
        <img class="hy" src="/static/bh/hy.png">
        <p class="zt2">
          <i>好友</i>
        </p>
        <img class="sz" src="/static/bh/sz.png">
        <p class="zt3">
          <i>设置</i>
        </p>
        <img class="rw" @click="teach" src="/static/bh/rw.png">
        <p @click="teach" class="zt4">
          <i>评教</i>
        </p>
        <img class="tz" src="/static/bh/tz.png">
        <p class="zt5">
          <i>公告</i>
        </p>
        <img class="qd" src="/static/bh/qd.png">
        <p class="zt6">
          <i>签到</i>
        </p>
        <img class="wj" src="/static/bh/wq.png">
        <p class="zt7">
          <i>反馈</i>
        </p>
        </div>

      </transition>
    </div>
    <transition name="others">
    <div class="right" v-show="show">
      <textarea class="textarea" ref="area" placeholder="输入留言" maxlength="500" v-model="text" @input="textchange">
      </textarea>
      <div class="list">
        <div class="listitem">你输入的内容是：{{text}}</div>
      </div>
      <div class="outer">
         <div class="submit" @click="add()">发表</div>
      </div>
      <div class="contain">
        <div class="emmm" v-for="(item,index) in list" :key='index'>
          <div class="hhhhh">
            空中劈叉的舰长：
            {{index+1}}
            {{item}}
            <a class="delate" href="javascript:;" @click='delate(index)'>删除</a>
          </div>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      date: new Date(),
      show: true,
      cj: false,
      text: "",
      list:[]
    };
  },
  created() {
    this.documentTitle = '崩坏3rd界面'
  },
  mounted() {
    var _this = this;
    this.timer = setInterval(function() {
      _this.date = new Date().toLocaleString();
    });
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    add(){
      this.list.push(this.text)
      this.text = '';
    },
    delate(index){
      this.list.splice(index,1)
    },
    textchange() {
      this.textmax = 500 - this.text.length;
    },
    teach(){
      this.$router.replace({ name: "teaching" });
    }
  }
};
</script>
<style lang="less" scoped>
.bh {
  position: relative;
  padding: 0 0;
  video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
  }
  .top {
    position: relative;
    width: 100%;
    height: 100px;
    .time {
      position: absolute;
      color: #ffffff;
      top: 28px;
      left: 518px;
      z-index: 111;
      text-shadow: 0 0 0.5em #6eb9d9, -0 -0 0.5em #6eb9d9;
      font-weight: 700;
    }
    .second {
      position: absolute;
      color: #ffffff;
      top: 28px;
      left: 908px;
      z-index: 111;
      text-shadow: 0 0 0.5em #6eb9d9, -0 -0 0.5em #6eb9d9;
      font-weight: 700;
    }
    .third {
      position: absolute;
      color: #ffffff;
      top: 28px;
      left: 1248px;
      z-index: 111;
      text-shadow: 0 0 0.5em #6eb9d9, -0 -0 0.5em #6eb9d9;
      font-weight: 700;
    }
    p {
      position: absolute;
      left: 30px;
      color: #ffffff;
      font-size: 32px;
      span {
        font-size: 20px;
      }
    }
    .jyt {
      position: absolute;
      top: 36px;
      left: 30px;
      width: 360px;
    }
    .tl {
      width: 36px;
      position: absolute;
      top: 12px;
      left: 440px;
    }
    .bjt1 {
      position: absolute;
      height: 36px;
      left: 452px;
      top: 20px;
    }
    .jh1 {
      position: absolute;
      width: 36px;
      top: 12px;
      left: 700px;
    }
    .jb {
      position: absolute;
      width: 36px;
      left: 800px;
      top: 12px;
    }
    .bjt2 {
      position: absolute;
      height: 36px;
      top: 20px;
      left: 812px;
    }
    .jh2 {
      position: absolute;
      width: 45px;
      top: 12px;
      left: 1060px;
    }
    .sj {
      position: absolute;
      top: 12px;
      left: 1150px;
      width: 36px;
    }
    .bjt3 {
      position: absolute;
      height: 36px;
      top: 20px;
      left: 1162px;
    }
    .jh3 {
      position: absolute;
      width: 45px;
      top: 12px;
      left: 1410px;
    }
  }
  .left {
    position: relative;
    width: 300px;
    height: 100%;
    .leftcopy-enter-active {
      transition: 1.5s;
    }
    .leftcopy-leave-active {
      transition: 1.5s;
    }
    .leftcopy-enter,.leftcopy-leave-to {
      transform: translateX(15px);
      opacity: 0;
    }
    .yx {
      position: absolute;
      width: 75px;
      left: 50px;
    }
    .zt1 {
      position: absolute;
      top: 25px;
      left: 135px;
      text-shadow: 0 0 0.2em #6eb9d9, -0 -0 0.2em #6eb9d9;
      color: #ffffff;
      font-size: 20px;
    }
    .btn {
      position: fixed;
      width: 75px;
      left: 10px;
      top: 175px;
      transition-duration: 1s;
    }
    .btn1 {
      position: fixed;
      width: 75px;
      left: -37px;
      top: 175px;
      transition-duration: 1s;
    }
    .hy {
      position: absolute;
      width: 75px;
      left: 105px;
      top: 70px;
    }
    .zt2 {
      position: absolute;
      top: 95px;
      left: 190px;
      text-shadow: 0 0 0.2em #6eb9d9, -0 -0 0.2em #6eb9d9;
      color: #ffffff;
      font-size: 20px;
    }
    .sz {
      position: absolute;
      width: 75px;
      left: 50px;
      top: 145px;
    }
    .zt3 {
      position: absolute;
      top: 172px;
      left: 135px;
      text-shadow: 0 0 0.2em #6eb9d9, -0 -0 0.2em #6eb9d9;
      color: #ffffff;
      font-size: 20px;
    }
    .rw {
      position: absolute;
      width: 75px;
      left: 105px;
      top: 215px;
    }
    .zt4 {
      position: absolute;
      top: 245px;
      left: 185px;
      text-shadow: 0 0 0.2em #6eb9d9, -0 -0 0.2em #6eb9d9;
      color: #ffffff;
      font-size: 20px;
    }
    .tz {
      position: absolute;
      width: 75px;
      left: 50px;
      top: 290px;
    }
    .zt5 {
      position: absolute;
      top: 315px;
      left: 135px;
      text-shadow: 0 0 0.2em #6eb9d9, -0 -0 0.2em #6eb9d9;
      color: #ffffff;
      font-size: 20px;
    }
    .qd {
      position: absolute;
      width: 75px;
      left: 105px;
      top: 360px;
    }
    .zt6 {
      position: absolute;
      top: 385px;
      left: 185px;
      text-shadow: 0 0 0.2em #6eb9d9, -0 -0 0.2em #6eb9d9;
      color: #ffffff;
      font-size: 20px;
    }
    .wj {
      position: absolute;
      width: 75px;
      left: 50px;
      top: 435px;
    }
    .zt7 {
      position: absolute;
      top: 460px;
      left: 135px;
      text-shadow: 0 0 0.5em #6eb9d9, -0 -0 0.5em #6eb9d9;
      color: #ffffff;
      font-size: 20px;
    }
  }
  .others-enter-active,.others-leave-active {
    transition: opacity 1.5s;
  }
  .others-enter,.others-leave-to {
    opacity: 0;
  }
  .right {
    position: absolute;
    width: 800px;
    height: 560px;
    padding: 15px 15px;
    border-radius: 40px;
    background: rgba(253, 253, 253, 0.8);
    right: 100px;
    .textarea {
      width: 100%;
      height: 230px;
      font-size: 24px;
      outline: none !important;
      border: 0.01rem solid #efefef;
      border-radius: 32px;
      box-sizing: border-box;
      margin: 0;
      resize: none;
      padding: 10px;
    }
    .outer {
      position: relative;
      width: 100%;
      height: 48px;
      .submit {
        position: absolute;
        right: 15px;
        font-size: 18px;
        width: 100px;
        height: 48px;
        background-color: #6eb9d9;
        color: #ffffff;
        line-height: 48px;
        text-align: center;
        border-radius: 35px;
      }
    }
    .list {
      position: relative;
      width: 100%;
      height: 68px;
      padding: 5px 15px;
      .listitem {
        border-radius: 30px;
        width: 100%;
        height: 48px;
        padding: 0 10px;
        line-height: 48px;
        overflow: auto;
        background: rgba(116, 133, 218, 0.6);
      }
    }
    .contain {
      position: relative;
      width: 100%;
      height: 180px;
      overflow: auto;
      margin-top: 10px;
      .emmm {
        position: relative;
        width: 100%;
        height: 38px;
        padding: 5px 15px;
         .hhhhh {
          position: relative;
          border-radius: 30px;
          width: 100%;
          height: 28px;
          padding: 0 10px;
          line-height: 28px;
          overflow: auto;
          background: rgba(131, 192, 249, 0.6);
          .delate {
            position: absolute;
            width: 60px;
            height: 100%;
            right: 0;
          }
        }
      }
    }
  }
}
</style>
