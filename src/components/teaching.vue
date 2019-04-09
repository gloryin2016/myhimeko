<template>
  <div class="bh">
    <!-- <video autoplay loop style="width: 100%">
      <source src="/static/video/red-rose.mp4">
    </video> -->
    <div class="top" v-if="show">
      <p>
        <i>
          <b>
            Lv.99
            <span>咸鱼的我</span>
          </b>
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
      <div class="second">{{cityName}}</div>
      <!--第三组-->
      <img class="sj" src="/static/bh/sj.png">
      <img class="bjt3" src="/static/bh/bjt.png">
      <img class="jh3" src="/static/bh/jh.png">
      <div class="third">学习是不可能学习的</div>
    </div>
    <div class="chose">
      <div class="inputLine">
        <span>所选学期</span>
        <select name v-model="countryName" @change="selectCountry">
          <option :value="item" v-for="(item,index) in area" :key="index">
            {{item.country}}
          </option>
        </select>
        <select name v-model="cityName">
          <option :value="item" v-for="(item,index) in countryName.city" :key="index">
            {{item}}
            <!-- <svg class="icon icon-arrow-bottom" aria-hidden="true">
              <use xlink:href="#icon-arrow-bottom"></use>
            </svg> -->
          </option>
        </select>
      </div>
    </div>
    <div class="list">
      <div class="one">
        教学态度：课前准备充足，准时上下课，严格维护课堂纪律，教书育人。
      </div>
      <input type="radio" id="A" value="A" v-model="picked">
      <label for="one">A</label>
      <input type="radio" id="B" value="B" v-model="picked">
      <label for="two">B</label>
      <input type="radio" id="C" value="C" v-model="picked">
      <label for="one">C</label>
      <input type="radio" id="D" value="D" v-model="picked">
      <label for="two">D</label>
    </div>
    <div class="list">
      <div class="one">
        教学能力：讲述的只是具有一定的专业前沿性，或者能适应技术的发展，具有全新的知识内容
        和实践内容，语言表达清楚，板书工整，课堂表达能力强，有多媒体教学的能力。
      </div>
      <input type="radio" id="A" value="A" v-model="picked1">
      <label for="one">A</label>
      <input type="radio" id="B" value="B" v-model="picked1">
      <label for="two">B</label>
      <input type="radio" id="C" value="C" v-model="picked1">
      <label for="one">C</label>
      <input type="radio" id="D" value="D" v-model="picked1">
      <label for="two">D</label>
    </div>
    <div class="list">
      <div class="one">
        教学内容：教学内容与教学大纲、教学计划基本相符，讲授的知识与社会实践紧密相结合
        ，教学目的明确。授课思路清晰，重点突出。
      </div>
      <input type="radio" id="A" value="A" v-model="picked2">
      <label for="one">A</label>
      <input type="radio" id="B" value="B" v-model="picked2">
      <label for="two">B</label>
      <input type="radio" id="C" value="C" v-model="picked2">
      <label for="one">C</label>
      <input type="radio" id="D" value="D" v-model="picked2">
      <label for="two">D</label>
    </div>
    <div class="list">
      <div class="one">
        教学方法：能采用恰当的形式实现师生互动，在授课中能采用讨论式、研究式、参与式的教学方法
        ，启迪学生的思考，能积极展开教学改革，并有切实成效。
      </div>
      <input type="radio" id="A" value="A" v-model="picked3">
      <label for="one">A</label>
      <input type="radio" id="B" value="B" v-model="picked3">
      <label for="two">B</label>
      <input type="radio" id="C" value="C" v-model="picked3">
      <label for="one">C</label>
      <input type="radio" id="D" value="D" v-model="picked3">
      <label for="two">D</label>
    </div>
    <div class="list">
      <div class="one">
        教学成果：能根据课程的不同特点和学生特点，恰当运用现代教育的
        方式和手段进行课堂教学，能激发学生学习的积极性，学生反应较好。
      </div>
      <input type="radio" id="A" value="A" v-model="picked4">
      <label for="one">A</label>
      <input type="radio" id="B" value="B" v-model="picked4">
      <label for="two">B</label>
      <input type="radio" id="C" value="C" v-model="picked4">
      <label for="one">C</label>
      <input type="radio" id="D" value="D" v-model="picked4">
      <label for="two">D</label>
    </div>
    <div class="emmm">
      <textarea class="textarea" ref="area" placeholder="评语" maxlength="1500" v-model="text">
      </textarea>
    </div>
    <div class="feedback">
      <div class="single">剩余{{1500-text.length}}字</div>
      <div class="sureback" @click="feedback">
        提交
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { setTimeout } from 'timers';
export default {
  data: function() {
    return {
      userinfo: '',
      picked: '',
      picked1: '',
      picked2: '',
      picked3: '',
      picked4: '',
      text:'',
      date: new Date(),
      show: true,
      selected: "",
      text: "",
      list: [],
      countryName: {},
      cityName: "请选择课程",
      area: [
        {
          country: "2017-2018第一学期",
          city: ["C语言", "数据结构"]
        },
        {
          country: "2017-2018第二学期",
          city: ["高等数学", "商务英语", "会计学"]
        },
        {
          country: "2018-2019第一学期",
          city: ["Java从入门到入坟", "HTML5从入门到精通", "JavaScript入门基础"]
        },
        {
          country: "2018-2019第二学期",
          city: ["Oracle数据库原理", "Android开发"]
        }
      ]
    };
  },
  created() {},
  mounted() {
    let _this = this;
    this.timer = setInterval(function() {
      _this.date = new Date().toLocaleString();
    });
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.goBack, false);
    }
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    selectCountry(value) {
      this.cityName = this.countryName.city[0];
    },
    goBack(){
      this.$router.replace({ name: "test" });
      //replace替换原路由，作用是避免回退死循环
    },
    feedback(){
      let wtf = [];
      if(this.picked == 'A'){
        wtf.push('100');
      }else if(this.picked == 'B'){
        wtf.push('75');
      }else if(this.picked == 'C'){
        wtf.push('50');
      }else if(this.picked == 'D'){
        wtf.push('25');
      }
      console.log(wtf)
      let wtf1 = [];
      if(this.picked1 == 'A'){
        wtf1.push('100');
      }else if(this.picked1 == 'B'){
        wtf1.push('75');
      }else if(this.picked1 == 'C'){
        wtf1.push('50');
      }else if(this.picked1 == 'D'){
        wtf1.push('25');
      }
      console.log(wtf1)
      let wtf2 = [];
      if(this.picked2 == 'A'){
        wtf2.push('100');
      }else if(this.picked2 == 'B'){
        wtf2.push('75');
      }else if(this.picked2 == 'C'){
        wtf2.push('50');
      }else if(this.picked2 == 'D'){
        wtf2.push('25');
      }
      console.log(wtf2)
      let wtf3 = [];
      if(this.picked3 == 'A'){
        wtf3.push('100');
      }else if(this.picked3 == 'B'){
        wtf3.push('75');
      }else if(this.picked3 == 'C'){
        wtf3.push('50');
      }else if(this.picked3 == 'D'){
        wtf3.push('25');
      }
      console.log(wtf3)
      let wtf4 = [];
      if(this.picked4 == 'A'){
        wtf4.push('100');
      }else if(this.picked4 == 'B'){
        wtf4.push('75');
      }else if(this.picked4 == 'C'){
        wtf4.push('50');
      }else if(this.picked4 == 'D'){
        wtf4.push('25');
      }
      console.log(wtf4)
      if (wtf == '') {
        alert("选项不能为空");
        return;
      }
      if (wtf1 == '') {
        alert("选项不能为空");
        return;
      }
      if (wtf2 == '') {
        alert("选项不能为空");
        return;
      }
      if (wtf3 == '') {
        alert("选项不能为空");
        return;
      }
      if (wtf4 == '') {
        alert("选项不能为空");
        return;
      }
      if (this.text == '') {
        alert("内容不能为空");
        return;
      }
      this.goup();

    },
    goup(){
      console.log(this.text)
      setTimeout(() =>
      {
        this.$router.replace({ name: "ending" });
      },1000);
    },
    destroyed(){
      window.removeEventListener('popstate', this.goBack, false);
    },
  }
};
</script>
<style lang="less" scoped>
.bh {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
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
      left: 890px;
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
  .chose {
    position: relative;
    width: 100%;
    height: 100%;
    left: 0;
    background: #ffffff;
    padding: 10px 15px;
    border-radius: 25px;
  }
  .list {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(253, 253, 253, 1);
    // opacity: 0.6;
    padding: 10px 20px;
    border-radius: 15px;
    .one {
      text-shadow: 0 0 0.2em #6eb9d9, -0 -0 0.2em #6eb9d9;
      color: #ffffff;
    }
  }
  .emmm {
    position: relative;
    padding: 10px 15px;
    background: #ffffff;
    border-radius: 25px;
    width: 100%;
    height: 260px;
    .textarea {
      width: 100%;
      height: 230px;
      font-size: 18px;
      outline: none !important;
      border: 1px solid #efefef;
      border-radius: 32px;
      box-sizing: border-box;
      margin: 0;
      resize: none;
      padding: 10px;
    }
  }
  .feedback {
    position: relative;
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    box-sizing: border-box;
    .single {
      position: absolute;
      top: 0;
      left: 0;
      height: 48px;
      width: 120px;
      text-align: center;
      line-height: 48px;
    }
    .sureback {
      position: absolute;
      text-align: center;
      line-height: 40px;
      width: 80px;
      height: 40px;
      right: 0rem;
      color: #ffffff;
      border-radius: 15px;
      background-color: #6eb9d9;
    }
  }
}
</style>
