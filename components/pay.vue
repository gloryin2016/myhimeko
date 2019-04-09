<template>
  <div class="first">
    <div class="wtf">
      <div class="content1">
        购买名称
      </div>
      <div class="content2">
        购买说明
      </div>
      <div class="content3">
        有效期
      </div>
      <div class="content4">
        价格
      </div>
    </div>
    <div class="one">

    </div>
    <div class="eee">
      加入会员可享受会员价，最高省13.8元
    </div>
    <div class="two">

    </div>
    <div class="sure">
      <div class="aaa">
        选择支付方式
      </div>
    </div>
    <div class="bot">
      确认支付：98.00元
    </div>
  </div>
</template>
<script>
export default {
  data:function() {
    return {

    };
  },
}
</script>

<style lang="less" scoped>
.first{
  .wtf{
    box-sizing: border-box;
    padding: 0 0.3rem;
    .content1{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.32rem;
      color: #000000;
      border-bottom: 0.02rem solid #e9e9e9;
    }
    .content2{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.32rem;
      color: #000000;
      border-bottom: 0.02rem solid #e9e9e9;
    }
    .content3{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.32rem;
      color: #000000;
      border-bottom: 0.02rem solid #e9e9e9;
    }
    .content4{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.32rem;
      color: #000000;
    }
  }
  .one{
    width: 100%;
    height: 0.2rem;
    background-color: #f8f8f8;
  }
  .eee{
    background-color: #f9dfa6;
    font-size: 0.32rem;
    width: 100%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
  }
  .two{
    width: 100%;
    height: 0.2rem;
    background-color: #f8f8f8;
  }
  .bot{
    width: 100%;
    height: 0.9rem;
    background-color: #59cb59;
    color: #ffffff;
    position: fixed;
    text-align: center;
    bottom: 0;
    font-size: 0.32rem;
    line-height: 0.9rem;
  }
  .sure{
      box-sizing: border-box;
      padding: 0 0.3rem;
      .aaa{
        width: 100%;
        height: 1rem;
        color:#dadada;
        line-height: 1rem;
        border-bottom: 0.02rem solid #e9e9e9;
      }
  }
}
</style>
