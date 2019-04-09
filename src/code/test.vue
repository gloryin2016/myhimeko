<template>
  <div id="content">
    <div id="app" v-cloak>
        <component :is="currentView"></component>
        <button @click="handleChangeView('A')">A</button>
        <button @click="handleChangeView('B')">B</button>
        <button @click="handleChangeView('C')">C</button>
    </div>
  </div>
</template>
<<script>
  var app = new Vue({
            el: '#app',
            components:{
                comA:{
                    template:`
                        <div>组件A</div>
                    `
                },
                comB:{
                    template:`
                        <div>组件B</div>
                    `
                },
                comC:{
                    template:`
                        <div>组件C</div>
                    `
                }
            },
            data:{
                currentView:'comA'
            },
            methods:{
                handleChangeView:function(component){
                    this.currentView='com'+component;
                }
            }
        });
</script>
<style scoped>

</style>

