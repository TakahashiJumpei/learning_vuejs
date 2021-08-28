<template>
<div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>

  <button @click="currentComponent = 'Home'">Home</button>
  <button @click="currentComponent = 'About'">About</button>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>

  <div>
    
    <h2>イベントのフォーム</h2>
    <EventTitle v-model="eventData.title"></EventTitle>

    <label for="maxNumber">最大人数</label>
    <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
    <p>{{typeof eventData.maxNumber}}</p>
  </div>
  

  
</div> 

</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data(){
    return {
      number: 15,
      currentComponent: "Home",
      eventData:{
        title:"タイトル",
        maxNumber:0
      }
    }
  },
  components:{
    LikeHeader,
    About,
    Home,
    EventTitle
  },
  methods:{
    incrementNumber(value){
      this.number = value;
    }
  }
};
</script>


