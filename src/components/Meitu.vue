<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-07 08:28:28
 * @LastEditTime: 2021-11-07 09:27:31
 * @LastEditors: MArio
-->
<template>
  <div id="meitu">
    <div class="meituTablCumls">
      <div class="meituTablItem">
        <img
          class="meituTablItemImg"
          src="https://pic.netbian.com/uploads/allimg/211021/232902-16348301422218.jpg"
        />
      </div>
      <div class="meituTablItem">
        <img
          class="meituTablItemImg"
          src="https://pic.netbian.com/uploads/allimg/190726/230851-1564153731ce2b.jpg"
        />
      </div>
    </div>
    <div class="meituTablCumls">
      <div class="meituTablItem">
        <img
          class="meituTablItemImg"
          src="https://pic.netbian.com/uploads/allimg/210810/231712-16286086323788.jpg"
        />
      </div>
      <div class="meituTablItem">
        <img
          class="meituTablItemImg"
          src="https://pic.netbian.com/uploads/allimg/180315/110404-152108304476cb.jpg"
        />
      </div>
    </div>
    <div class="meituCardCumls Filmscro">
      <div class="meituCardCItem">
        <img
          class="meituTablItemImg"
          src="https://pic.netbian.com/uploads/allimg/211029/115213-163547953392a6.jpg"
        />
      </div>
      <div class="meituCardCItem">
        <img
          class="meituTablItemImg"
          src="https://pic.netbian.com/uploads/allimg/210718/001826-16265387066216.jpg"
        />
      </div>
      <div class="meituCardCItem">
        <img
          class="meituTablItemImg"
          src="https://pic.netbian.com/uploads/allimg/210922/191729-16323094499dcf.jpg"
        />
      </div>
      <div class="meituCardCItem">
        <img
          class="meituTablItemImg"
          src="https://pic.netbian.com/uploads/allimg/211025/105543-1635130543b705.jpg"
        />
      </div>
      <div class="meituCardCItem">
        <img
          class="meituTablItemImg"
          src="https://pic.netbian.com/uploads/allimg/210922/191502-1632309302364a.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "meitu",
};
</script>

<style>
.meituCardCItem {
  width: 95%;
  height: 160px;
  background-color: #f9f9f9;
  /* border: 1px solid #e5e5e5; */
  margin: 7px;
  border-radius: 5px;
}
.meituCardCumls {
  width: 100%;
  height: 66%;
  margin-top: 8%;
}
.meituTablItemImg {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  object-position: top;
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
}

.meituTablItemImg:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -5px);
  transition-delay: 0s !important;
}
.meituTablItem {
  width: 46%;
  height: 100%;
  background-color: #f9f9f9;
  /* border: 1px solid #e5e5e5; */
  float: left;
  margin: 5px;
  border-radius: 5px;
}

.meituTablCumls {
  width: 100%;
  height: 65px;
  padding-left: 1px;
}
#meitu {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  /* padding-left: 5px; */
  padding-top: 30px;
}
</style>
