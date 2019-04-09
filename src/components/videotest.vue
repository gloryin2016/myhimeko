<template>
  <div class="bh">
    <video
      controls
      muted
      loop
      style="width: 100%"
      poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534485592987&di=5d571e1c8407eed1d6f220025e5cf938&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F7ee4fc5d5d5687b192cb338680465e1a9fbc14c8.gif"
    >
      <source src="https://cdn.qupeiyin.cn/uploads/20190319/lg8NcS8Y7skh3zGP7i-ffLLqEk57.mp4">
    </video>
    <video
      controls
      id="my-video"
      webkit-playsinline="true"
      playsinline="true"
      x-webkit-airplay="true"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-ignore-metadata="true"
      width="100%"
      height="100%"
    >
    <source src="https://cdn.qupeiyin.cn/uploads/20190319/lg8NcS8Y7skh3zGP7i-ffLLqEk57.mp4"></video>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  created() {
    this.documentTitle, "崩坏3rd界面";
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
  methods: {}
};
</script>
<style lang="less" scoped>
.bh {
  position: relative;
  #my-video {
    object-fit: cover;
    object-position: center center;
  }
}
</style>

