<template>
  <div class="hello">
    {{xuefan}}
    <p @click="two(0)">这是：111111111111111</p>
    <p @click="two(1)">这是：12321321</p>
    <p v-bind:class="four">这是：{{name2}}</p>
    <p>{{message2}}</p>
    <input v-model="message2">
    <p>{{message3}}</p>
    <button v-on:click="reverseMessage">反转</button>
    <p v-show="ok">That's good</p>
    <ul>
      <li v-for="(value,index) in object" :key="index">
        {{key}}:{{value}}
      </li>
    </ul>
    <p>翻转前{{message5}}</p>
    <p>反转后{{reverseMessage}}</p>
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button @click = "counter++" style = "font-size:25px;">点我</button>
    <div class="right">
      <a href>百度首页</a>
      <div class="sz">
        <a class="dropbtn">设置
          <img src="\D:\ps\jtxx.png">
        </a>
        <div class="sz-content">
          <a href="javascript:;" @click="tabshow1">搜索设置</a>
          <br>
          <a href="javascript:;" @click="tabshow2">高级搜索</a>
          <br>
          <a href="javascript:;" @click="tabshow3">关闭预测</a>
          <br>
          <a href="javascript:;" @click="tabshow4">隐私设置</a>
        </div>
      </div>
      <a href>登录</a>
    </div>
    <p>你点击了：{{counter2}}次</p>
    <button @click="counter2++">点击</button>
    千米：<input type="text" v-model="kilometers">
    米:<input type="text" v-model="meters">
    <div v-bind:style="styleobject">
    绑定
    </div>
    <div v-bind:style="[baseStyles,overridingStyles]">
      随便写些什么
      <button v-on:click="say('hi')">say hi</button>
      <button v-on:click="say('aaaa')">say aaaa</button>
    </div>
    <div>
      <p>输入框</p>
      <input v-model="message6" placeholder="请输入">
      <p>输入的内容是：{{message6}}</p>
      <p>textarea 元素</p>
      <textarea v-model="message7" placeholder="多行文本输入......"></textarea>
      <p>输入的内容:{{message7}}</p>
      <p>单选框</p>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{checked}}</label>
      <p>多个复选框</p>
      <input type="checkbox" id="baidu" value="Baidu" v-model="checkedNames">
      <label for="baidu">Baidu</label>
      <input type="checkbox" id="google" value="Google" v-model="checkedNames">
      <label for="google">Google</label>
      <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
      <label for="taobao">Taobao</label><br>
      <span>选择的是：{{checkedNames}}</span><br>
      <input type="radio" id="baidu" value="Baidu" v-model="picked">
      <label for="baidu">Baidu</label>
      <input type="radio" id="google" value="Google" v-model="picked">
      <label for="google">Google</label>
      <input type="radio" id="taobao" value="Taobao" v-model="picked">
      <label for="taobao">Taobao</label><br>
      <span>选择的是：{{picked}}</span><br>
      <select v-model="selected" name="fruit">
        <option value="">选择网站</option>
        <option value="www.google.com">谷歌</option>
        <option value="www.baidu.com">百度</option>
        <option value="www.pixiv.com">pixiv</option>
      </select>
      <p>选择的网站是:{{selected}}</p>
    </div>
  </div>
</template>
<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
        name2: "0",
        xuefan:'一舞剑器动四方',
        counter: 0,
        message2:'输入',
        message3:'翻转效果',
        ok:true,
        counter2:0,
        kilometers:0,
        meters:0,
        styleobject:{
          color:'pink',
          fontSize:'24px'
        },
        baseStyles:{
          color:'green',
          fontSize:'18px'
        },
        overridingStyles:{
          'font-weight':'normal'
        },
        object:{
          name:'东方不败',
          url:'www.khbd.com',
          logo:'none',
        },
        message5:'what the ****',
        message6:'example',
        message7:'example,',
        checked:false,
        checkedNames:[],
        picked:'Baidu',
        selected:'',
        user:[1,2,3,4,5,6],
    }
  },
  computed:{
      reverseMessage:function(){
        return this.message5.split('').reverse().join('')
      }
    },
    watch:{
      kilometers:function(val){
        this.kilometers=val;
        this.meters=val*1000;
      },
      meters:function(val){
        this.kilometers=val/1000;
        this.meters=val;
      }
    },
    methods: {
      two(xf) {
        if(xf == 0) {
          this.xuefan = '五天' + 'SVIP '
        }
        if(xf == 1) {
          this.xuefan = '年费SVIP兑换券'
        }
      },
      tabshow1:function(event){
        this.name2 = 1
      },
      tabshow2:function(event){
        this.name2 = 2
      },
      tabshow3:function(event){
        this.name2 = 3
      },
      tabshow4:function(event){
        this.name2 = 4
      },
      reverseMessage:function(){
        this.message3=this.message3.split('').reverse().join('')
      },
      say:function(message){
        alert(message)
      },
    },
    created() {
      this.xuefan = 999
    },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
}
.tabshow1 {
  display: none;
}
.tabshow2 {
  display: none;
}
.tabshow3 {
  display: none;
}
.dropbtn {
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
.sz {
  position: relative;
  display: inline-block;
}
.sz-content {
  display: none;
  position: absolute;
  background-color: green;
  min-width: auto;
  padding: 8px 8px;
}
.sz-content a {
  text-decoration: none;
  color: #111111;
}
.sz:hover .sz-content {
  display: block;
  background-color: #f5f5f5;
}
.sz-content a:hover {
  background-color: #3385ff;
}
</style>
