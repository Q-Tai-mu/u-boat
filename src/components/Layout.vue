<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-06 22:07:37
 * @LastEditTime: 2021-11-07 00:13:32
 * @LastEditors: MArio
-->
<template>
  <div id="layout">
    <TitleBlock/>
    <HomePage />
    <Aside />
  </div>
</template>

<script>
import HomePage from "../components/HomePage.vue";
import Aside from "../components/Aside.vue";
import TitleBlock from "../components/TitleBlock.vue";
export default {
  name: "layout",
  components: {
    HomePage,
    Aside,
    TitleBlock
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
