<template>
  <div class="animite">
    <!-- <transition name="slide-fade"> -->
      <a v-on:click="show = !show">
        <img :class="{jy:show,jy2:!show}" src="/static/bh/jy.png">
      </a>
    <!-- </transition> -->
    <div class="left">
      <div class="one"><img src="/static/bh/yx.png"></div>
      <div class="one"><img src="/static/bh/hy.png"></div>
      <div class="one"><img src="/static/bh/btn.png"></div>
      <div class="one"><img src="/static/bh/sz.png"></div>
      <div class="one"><img src="/static/bh/qd.png"></div>
      <div class="one"><img src="/static/bh/wq.png"></div>
      <div class="one"><img src="/static/bh/rw.png"></div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      date: new Date(),
      show: true
    };
  },
  created() {
  },
  mounted() {
    var _this = this;
    this.timer = setInterval(function() {
      _this.date = new Date().toLocaleString();
    });
    // this.init();
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    // init(){
    //   this.show = !this.show
    // }
  },
};
</script>
<style lang="less" scoped>
.animite {
  position: relative;
  // .slide-fade-enter-active {
  //     transition: all 2.5s ease;
  //   }
  //   .slide-fade-leave-active {
  //     transition: all 2.5s cubic-bezier(0.42, 0, 1, 1);
  //   }
  //    .slide-fade-enter,
  //    .slide-fade-leave-to {
  //     transform: translatey(-300px);
  //     opacity: 0;
  //   }
    .jy {
      position: absolute;
      width: 200px;
      top: 200px;
      left: 30px;
      transition-duration: 1.5s;
    }
    .jy2 {
      position: absolute;
      width: 300px;
      top: 200px;
      left: 30px;
      transition-duration: 1.5s;
    }
    .left {
      position: absolute;
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      height: 1.8rem;
      overflow: auto;
    }
}
</style>
