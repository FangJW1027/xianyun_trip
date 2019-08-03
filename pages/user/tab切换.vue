<template>
    <div class="content">

        <!-- tab按钮 -->
        <div class="ctrl">
            <span v-for="(item,index) in [`新闻`,`娱乐`,`体育`] "
            :key="index" @click="handleClick(index)"
            :class="{active:current===index}">
            {{item}}
            </span>
        </div>

        <div v-if="current === 0">
            <p>广州天气炎热</p>
            <p>时而转晴</p>
            <p>多云</p>
        </div>

        <div v-if="current === 1">
            <p>李晨范冰冰离婚</p>
            <p>哪吒破十亿</p>
            <p>狮子王上映</p>
        </div>

        <div v-if="current === 2">
          <p>广东总冠军</p>
          <p>杜兰特加盟篮网</p>
          <p>卡哇伊加盟快船</p>
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return{
          current:0
      }
  },

  methods:{
      handleClick(index){
        this.current = index;
      }
  }
}
</script>

<style>
  .active{
      color:gold;
      /* border-color:gold; */
  }

  .content{
      margin:50px;
  }

  .ctrl{
      margin-bottom:20px;
  }

  .ctrl span{
      cursor:pointer;
      margin:0 5px;
      padding:5px;
      border:1px blue solid;
  }
</style>
