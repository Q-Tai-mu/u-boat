<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-06 22:07:37
 * @LastEditTime: 2021-11-09 12:37:07
 * @LastEditors: MArio
-->
<template>
  <div id="layout">
    <TitleBlock />
    <transition name="slide-fade">
      <HomePage v-show="view === 'Film'" />
    </transition>
    <transition name="slide-fade">
      <Meitu v-show="view === 'Meitu'" />
    </transition>
    <transition name="slide-fade">
      <Cuitu v-show="view === 'Cuitu'" />
    </transition>
    <transition name="slide-fade">
      <SetUp v-show="view === 'SetUp'" />
    </transition>

    <Aside />
    <Popup />
  </div>
</template>

<script>

import HomePage from "../components/HomePage.vue";
import Aside from "../components/Aside.vue";
import TitleBlock from "../components/TitleBlock.vue";
import Meitu from "../components/Meitu.vue";
import Cuitu from "../components/Cuitu.vue";
import SetUp from "../components/SetUp.vue";
import Popup from "../components/Popup.vue";
export default {
  name: "layout",
  components: {
    HomePage,
    Aside,
    TitleBlock,
    Meitu,
    Cuitu,
    SetUp,
    Popup,
  },
  computed: {
    view() {
      return this.$store.getters.getView;
    },
  },
};
</script>

<style>
#layout {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
}
</style>
