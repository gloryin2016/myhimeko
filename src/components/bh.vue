<template>
  <div class="bh">
    <video class="v1" autoplay muted loop style="width: 100%">
      <source src="https://webstatic.bh3.com/video/bh3.com/pv/CG_OP_1800.mp4">
    </video>
    <transition name="others">
      <div class="top" v-if="show">
        <i>
          <b>
            <p class="level">
              lv.80
              <span>空中劈叉清洁工</span>
            </p>
          </b>
        </i>
        <!--第一组-->
        <img class="jyt" src="/static/bh/jyt.png">
        <img class="tl" src="/static/bh/tl.png">
        <img class="bjt1" src="/static/bh/bjt.png">
        <img class="jh1" src="/static/bh/jh.png">
        <div class="time">{{date}}</div>
        <!--第二组-->
        <img class="jb" src="/static/bh/jb.png">
        <img class="bjt2" src="/static/bh/bjt.png">
        <img class="jh2" src="/static/bh/jh.png">
        <div id="clock">2019.02.14</div>
        <!--第三组-->
        <img class="sj" src="/static/bh/sj.png">
        <img class="bjt3" src="/static/bh/bjt.png">
        <img class="jh3" src="/static/bh/jh.png">
      </div>
    </transition>
    <div class="left">
        <a v-on:click="show = !show">
          <img :class="{btn:show,btn1:!show}" src="/static/bh/btn2.png">
        </a>
      <transition name="leftcopy">
        <div v-if="show">
          <img class="yx" src="/static/bh/yx.png">
          <p class="zt1"><i>邮箱</i></p>
          <img class="hy" src="/static/bh/hy.png">
          <p class="zt2"><i>好友</i></p>
          <img class="sz" src="/static/bh/sz.png">
          <p class="zt3"><i>设置</i></p>
          <img class="rw" src="/static/bh/rw.png">
          <p class="zt4"><i>任务</i></p>
          <img class="tz" src="/static/bh/tz.png">
          <p class="zt5"><i>公告</i></p>
          <img class="qd" src="/static/bh/qd.png">
          <p class="zt6"><i>签到</i></p>
          <img class="wj" src="/static/bh/wq.png">
          <p class="zt7"><i>问卷</i></p>
        </div>
      </transition>
    </div>
    <transition name="others">
      <div class="right" v-if="show">
        <img v-on:mouseover="wtf()" class="cj" src="/static/bh/cj.png">
        <img v-on:mouseleave="emm()" v-show="cj" class="cj" src="/static/bh/cj2.png">
        <img v-on:mouseover="wtf1()" class="nws" src="/static/bh/nws.png">
        <img v-on:mouseleave="emm1()" v-show="nws" class="nws" src="/static/bh/nws2.png">
        <img v-on:mouseover="wtf2()" class="zb" src="/static/bh/zb.png">
        <img v-on:mouseleave="emm2()" v-show="zb" class="zb" src="/static/bh/zb2.png">
        <img v-on:mouseover="wtf3()" class="jy" src="/static/bh/jy.png">
        <img v-on:mouseleave="emm3()" v-show="jy" class="jy" src="/static/bh/jy2.png">
        <img v-on:mouseover="wtf4()" class="bj" src="/static/bh/bj.png">
        <img v-on:mouseleave="emm4()" v-show="bj" class="bj" src="/static/bh/bj2.png">
        <img v-on:mouseover="wtf5()" class="jt" src="/static/bh/jt.png">
        <img v-on:mouseleave="emm5()" v-show="jt" class="jt" src="/static/bh/jt2.png">
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      date: new Date(),
      uesrinfo:{},
      show: true,
      cj: false,
      nws: false,
      zb: false,
      jy: false,
      bj: false,
      jt: false,
    };
  },
  created() {
    this.$store.commit("documentTitle", "崩坏3rd界面");
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(function() {
      _this.date = new Date().toLocaleString();
    }, );
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    wtf() {
      this.cj = true;
    },
    emm() {
      this.cj = false;
    },
    wtf1() {
      this.nws = true;
    },
    emm1() {
      this.nws = false;
    },
    wtf2() {
      this.zb = true;
    },
    emm2() {
      this.zb = false;
    },
    wtf3() {
      this.jy = true;
    },
    emm3() {
      this.jy = false;
    },
    wtf4() {
      this.bj = true;
    },
    emm4() {
      this.bj = false;
    },
    wtf5() {
      this.jt = true;
    },
    emm5() {
      this.jt = false;
    },
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
    .level {
      position: absolute;
      font-size: 32px;
      color: #ffffff;
      left: 28px;
      span {
        font-size: 20px;
      }
    }
    .jyt {
      position: absolute;
      width: 350px;
      left: 28px;
      top: 36px;
    }
    .tl {
      position: absolute;
      width: 36px;
      top: 12px;
      left: 440px;
    }
    .bjt1 {
      position: absolute;
      height: 36px;
      top: 20px;
      left: 452px;
    }
    .time {
      position: absolute;
      color: #ffffff;
      top: 28px;
      left: 525px;
      z-index: 111;
    }
    .jh1 {
      position: absolute;
      width: 45px;
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
    #clock {
      position: absolute;
      top: 26px;
      left: 900px;
      text-align: center;
      color: #fff;
      font-family: "等线 Light", "Microsoft Yahei Light";
      font-size: 20px;
      text-shadow: 0 0 20px yellow;
      z-index: 10;
    }
    #clock .sec {
      font-size: 24px;
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
      transition: all 1.5s ease;
    }
    .leftcopy-leave-active {
      transition: all 1s cubic-bezier(0.42, 0, 1, 1);
    }
     .leftcopy-enter,.leftcopy-leave-to {
      transform: translateX(18px);
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
      transition-duration: 1.5s;
    }
    .btn1 {
      position: fixed;
      width: 75px;
      left: -37px;
      top: 175px;
      transition-duration: 1.5s;
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
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .others-enter-active,
  .others-leave-active {
    transition: opacity 1.5s;
  }
  .others-enter,
  .others-leave-to {
    opacity: 0;
  }
  .right {
    position: relative;
    .cj {
      position: absolute;
      right: 260px;
    }
    .nws {
      position: absolute;
      top: 140px;
      right: 330px;
    }
    .zb {
      position: absolute;
      top: 140px;
      right: 180px;
    }
    .jy {
      position: absolute;
      top: 280px;
      right: 400px;
    }
    .bj {
      position: absolute;
      top: 280px;
      right: 260px;
    }
    .jt {
      position: absolute;
      top: 420px;
      right: 330px;
    }
  }
}
</style>
