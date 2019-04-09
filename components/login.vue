<template>
  <div class="bh">
    <video class="v1" autoplay muted loop style="width: 100%">
      <source src="/static/video/red-rose.mp4">
    </video>
    <div class="top">
      <p>青春最美的不是梦，而是与你一起追梦的人！</p>
    </div>
    <div class="content">
      <div class="form">
        <div class="phone">
          <input type="text" class="input1" placeholder="学号" v-model="username">
        </div>
        <div class="password">
          <input type="password" class="input2" placeholder="密码" v-model="password">
        </div>
        <div class="enter" @click="gopage">
          登录
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      date: new Date(),
      show: true,
      cj: false,
      yes: false,
      username: '',
      password: ''
    };
  },
  created() {},
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
    gopage(){
      // setTimeout(function(){
      //   this.doit();
      // },500)
      this.$router.replace({ name: "test" });
    },
    // doit(){
    //   this.$router.replace({ name: "test" });
    // }
  }
};
</script>
<style lang="less" scoped>
.bh {
  position: relative;
  width: 100%;
  height: 100%;
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
    p {
      font-size: 42px;
      font-weight: 700;
      text-align: center;
      color: #fff;
      font-family: "等线 Light", "Microsoft Yahei Light";
      text-shadow: 0 0 20px gold;
      z-index: 10;
    }
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    .form {
      position: absolute;
      width: 820px;
      height: 420px;
      top: 80px;
      border-radius: 35px;
      background: rgba(253, 253, 253, 0.8);
      left: 50%;
      transform: translate(-50%, 0);
      .phone {
        width: 620px;
        margin: 0 auto;
        height: 60px;
        margin-top: 90px;
        background-color: #fff;
        display: flex;
        align-items: center;
        border: 1px solid #cccccc;
        border-radius: 40px;
        .input1 {
          width: 100%;
          font-size: 28px;
          vertical-align: middle;
          // height: .28rem;
          line-height: 40px;
          border: 0;
          outline: none;
          border-radius: 40px;
          padding-left: 10px;
        }
      }
      .password {
        width: 620px;
        margin: 0 auto;
        height: 60px;
        margin-top: 40px;
        background-color: #fff;
        display: flex;
        align-items: center;
        border: 1px solid #cccccc;
        border-radius: 40px;
        .input2 {
          width: 100%;
          font-size: 28px;
          vertical-align: middle;
          // height: .28rem;
          line-height: 40px;
          border: 0;
          outline: none;
          border-radius: 40px;
          padding-left: 10px;
        }
      }
      .enter {
        position: absolute;
        top: 300px;
        left: 50%;
        transform: translate(-50%,0);
        width: 200px;
        height: 60px;
        background-color: #ffffff;
        text-align: center;
        font-size: 28px;
        color: #fff;
        border-radius: 0.4rem;
        line-height: 60px;
        text-shadow: 0 0 0.2em #6eb9d9, -0 -0 0.2em #6eb9d9;
        box-shadow: 0 0 10px #6eb9d9;
      }
    }
  }
}
</style>
