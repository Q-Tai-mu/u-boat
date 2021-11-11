<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-06 22:05:56
 * @LastEditTime: 2021-11-10 10:31:26
 * @LastEditors: MArio
-->
<template>
  <div id="homePage">
   <div class="main">
      <!-- 三个单选按钮，先默认选择第一个 -->
      <input class="input2" type="radio" name="choose" id="choose1" checked />
      <input class="input2" type="radio" name="choose" id="choose2" />
      <input class="input2" type="radio" name="choose" id="choose3" />
      <!-- 放三张图片，用背景图片表示 -->
      <div class="item item1">
        <img
          class="itemImg"
          src="https://pic.netbian.com/uploads/allimg/210318/135851-1616047131c38d.jpg"
        />
      </div>
      <div class="item item2">
        <img
          class="itemImg"
          src="https://pic.netbian.com/uploads/allimg/210920/165135-16321278956369.jpg"
        />
      </div>
      <div class="item item3">
        <img
          class="itemImg"
          src="https://pic.netbian.com/uploads/allimg/210604/200017-16228080178825.jpg"
        />
      </div>
      <!-- 三个label标签 -->
      <span class="select">
        <label for="choose1"></label>
        <label for="choose2"></label>
        <label for="choose3"></label>
      </span>
    </div>
    <div
      ref="box"
      class="homePageCardD Filmscro"
      @scroll="handleScroll($event)"
    >
      <table>
        <tr v-for="item in dataCard" :key="item.id">
          <td v-for="item2 in item" :key="item2.id">
            <div class="homePageImgCard" @click="OpenMask(item2.href)">
              <div class="homePageImgCardOnImg">
                <img
                  class="homePageImgCardOnImg"
                  :src="item2.imgSrc"
                  style="height: 100%"
                />
              </div>
              <div class="homePageImgCardTextCard">
                <span>{{ item2.name }}</span>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div v-show="mask == 'Off'" class="box">
      <div class="boxTdiv">
        <!-- 标题头加关闭按钮 -->
        <div class="boxTitleModel">
          <div class="boxTitleModelLeft">
            <span>{{ nameTitleModel }}</span>
          </div>
          <div class="boxTitleModelRight">
            <div class="boxTitleButton" @click="closeModelTile()">关闭</div>
          </div>
        </div>
        <div v-show="loading === 'Off'" class="loadingSeven">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <!-- 内容展示 -->
        <div class="boxcontentModel Filmscro">
          <div class="boxcontentModelImg" style="height: auto">
            <img
              v-for="item in imgSrc"
              :key="item.id"
              class="boxcontentModelImgTon"
              alt="图片加载中..."
              :src="item.imgSrc"
            />

            <div class="boxcontentModelImgText">
              <div class="boxcontentBottomText">
                <span> 不提供下载，原因：不侵犯网址权益,请扫描了解详情</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var cheerio = require("cheerio");

export default {
  name: "homePage",
  data() {
    return {
      loading: "No",
      nameTitleModel: "默认标题",
      imgSrc: [],
      tesxt: "内容加载中...",
      appHer: "公众号加载中...",
      mask: "No",
      dataCard: [[]],
      PageIndex: [1, 2],
      pageNumber: 1,
    };
  },
  created() {
    for (var i = 3; i < 200; i++) {
      this.PageIndex.push(i);
    }
    this.doInit();
  },
  methods: {
    closeModelTile() {
      this.mask = "No";
    },
    doInit() {
      axios
        .get("https://www.jiligamefun.com/category/photo", { timeout: 120000 })
        .then((resp) => {
          var $ = cheerio.load(resp.data);
          var arr1 = [];
          $("a.inn-archive__item__thumbnail__container").each(function (i, e) {
            var pro = {
              name: $(e).children("img").attr("alt"),
              imgSrc: $(e).children("img").attr("src"),
              href: $(e).attr("href"),
            };
            arr1.push(pro);
          });
          //把 arr 的一维数组先转成二维的，然后再在 vue 里面渲染
          this.dataCard = arr1.reduce(
            (pre, next, idx) => {
              // reduce 用来便利数组，具体语法就 rtfm 吧
              const inner = pre[~~(idx / 5)]; // ~~用来取整，inner 是内层数组
              if (inner !== undefined) {
                // 判断有没有内层数组
                inner.push(next); // 如果有就把遍历的值 next push 到内层数组里
              } else {
                pre.push([next]); // 没有就新建一个包含 next 的数组，作为内层数组
              }
              return pre;
            },
            [[]]
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleScroll(e) {
      var _this = this;
      if (
        parseInt(e.srcElement.scrollTop) +
          parseInt(e.srcElement.offsetHeight) >=
        parseInt(e.srcElement.scrollHeight.toString()) - 1
      ) {
        if (this.PageIndex[this.pageNumber] != null) {
          this.pageNumber = this.PageIndex[this.pageNumber];
          this.$refs.box.scrollTop = e.srcElement.scrollTop - 200;

          axios
            .get(
              "https://www.jiligamefun.com/category/photo/page/" +
                this.PageIndex[this.pageNumber]
            )
            .then((resp) => {
              var $ = cheerio.load(resp.data);
              var arr1 = [];
              $("a.inn-archive__item__thumbnail__container").each(function (
                i,
                e
              ) {
                var pro = {
                  name: $(e).children("img").attr("alt"),
                  imgSrc: $(e).children("img").attr("src"),
                  href: $(e).attr("href"),
                };
                arr1.push(pro);
              });
              //把 arr 的一维数组先转成二维的，然后再在 vue 里面渲染
              var dataCard = arr1.reduce(
                (pre, next, idx) => {
                  // reduce 用来便利数组，具体语法就 rtfm 吧
                  const inner = pre[~~(idx / 5)]; // ~~用来取整，inner 是内层数组
                  if (inner !== undefined) {
                    // 判断有没有内层数组
                    inner.push(next); // 如果有就把遍历的值 next push 到内层数组里
                  } else {
                    pre.push([next]); // 没有就新建一个包含 next 的数组，作为内层数组
                  }
                  return pre;
                },
                [[]]
              );
              for (var i = 0; i < dataCard.length; i++) {
                _this.dataCard.push(dataCard[i]);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    },
    OpenMask(e) {
      this.mask = "Off";
      this.loading = "Off";
      this.nameTitleModel = "更新中....";
      this.imgSrc = [];
      console.log(e);
      axios
        .get(e, { timeout: 120000 })
        .then((resp) => {
          var arr1 = [];
          var $ = cheerio.load(resp.data);
          var _this = this;
          _this.loading = "On";
          $("div.inn-singular__post__body__content").each(function (i, e) {
            _this.nameTitleModel = $(e).children("p").text();
            $(e)
              .children("p")
              .each(function (b, h) {
                $(h)
                  .children("img")
                  .each(function (j, k) {
                    // console.log($(k).attr("src"));
                    var pro = {
                      imgSrc: $(k).attr("src"),
                    };
                    arr1.push(pro);
                  });
              });
            _this.imgSrc = arr1;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>


.loadingSeven {
  width: 80px;
  height: 40px;
  margin: 0 auto;
  margin-top: 100px;
}
.loadingSeven span {
  display: inline-block;
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: lightgreen;
  -webkit-animation: loadsaven 1.04s ease infinite;
}
@-webkit-keyframes loadsaven {
  0%,
  100% {
    height: 40px;
    background: lightgreen;
  }
  50% {
    height: 60px;
    margin-top: -20px;
    background: lightblue;
  }
}
.loadingSeven span:nth-child(2) {
  -webkit-animation-delay: 0.13s;
}
.loadingSeven span:nth-child(3) {
  -webkit-animation-delay: 0.26s;
}
.loadingSeven span:nth-child(4) {
  -webkit-animation-delay: 0.39s;
}
.loadingSeven span:nth-child(5) {
  -webkit-animation-delay: 0.52s;
}

.boxcontentBottomText {
  color: #7e758e;
  font-size: 13px;
}
.boxcontentModelImgText {
  width: 100%;
}
.boxcontentModelImgTon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.boxcontentModelImg {
  width: 100%;
  height: 100%;
  /* padding-left: 10px;
  padding-right: 10px; */
}
.boxcontentModel {
  width: 100%;
  height: 82%;
}
.boxTitleButton {
  width: 40px;
  height: 25px;
  /* background-color: #f9f9f9; */
  /* border: 1px solid #e5e5e5; */
  border-radius: 5px;
  /* box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15); */
  cursor: pointer;
  float: right;
  padding-top: 5px;
  font-size: 13px;
  margin-top: 5px;
  text-align: center;
}
.boxTitleButton:hover {
  background-color: #eaeaea;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: #e5e5e5;
  /* border: 1px solid #e5e5e5; */
  transition: all 0.2s ease-in-out;
}
.boxTitleModelRight {
  width: 20%;
  height: 100%;
  float: right;
}
.boxTitleModelLeft {
  width: 80%;
  height: 100%;
  float: left;

  padding-top: 9px;
  font-size: 13px;
}
.boxTitleModel {
  width: 100%;
  height: 50px;
}
.boxTdiv {
  width: 94%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
  /* text-align: right; */
}
.box {
  position: fixed;
  top: 30px;
  right: 10px;
  bottom: 0;
  left: 10px;
  background-color: rgba(221, 221, 221, 0.5);
  z-index: 2;
}
.homePageImgCardTextCard {
  width: 100%;
  height: 10%;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #fefefe;
  /* padding-top: 5px; */
  color: #7e758e;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}
.homePageImgCardOnImg {
  width: 100%;
  height: 88%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  object-fit: cover;
  object-position: top;
}
.homePageImgCard {
  width: 98px;
  height: 170px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin: 3px;
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  /* -webkit-box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15); */
  /* box-shadow: 0 4px 16px rgba(48, 55, 66, 0.15); */
}
.homePageImgCard:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -5px);
  transition-delay: 0s !important;
}
.homePageCardD {
  height: 72%;
  /* width: 100%; */
  width: 97.4%;
  /* padding: 5px; */
  padding: 5px;
  /* padding-top: 10px; */
}
.itemImg {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  object-position: top;
  border: 1px solid #e5e5e5;
  /* object-fit: fill; */
  /* object-fit: contain; */
  /* object-fit: scale-down; */
}
.main input:nth-of-type(1):checked ~ .item {
  transform: translateX(0);
}
.main input:nth-of-type(2):checked ~ .item {
  transform: translateX(-100%);
}
.main input:nth-of-type(3):checked ~ .item {
  transform: translateX(-200%);
}
.main input:nth-of-type(1):checked ~ .select label:nth-of-type(1) {
  background-color: rgb(185, 106, 168);
}
.main input:nth-of-type(2):checked ~ .select label:nth-of-type(2) {
  background-color: rgb(113, 166, 187);
}
.main input:nth-of-type(3):checked ~ .select label:nth-of-type(3) {
  background-color: rgb(197, 189, 74);
}
.select > label {
  width: 6px;
  height: 6px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  cursor: pointer;
  border: 1.5px solid white;
}
.select {
  position: absolute;
  bottom: 10px;
  left: 90%;
  transform: translateX(-50%);
  width: 60px;
  height: 10px;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.input2 {
  position: relative;
  z-index: 100;
  display: none;
}
.item1 {
  /* background-image: url(https://s1.jiligamefun.com/images/2020/02/18/4905cf2f49f25166e14e711d48cc6187.jpg); */
}
.item2 {
  /* background-image: url(./img/4.jpg); */
  left: 100%;
}
.item3 {
  /* background-image: url(./img/11.jpg); */
  left: 200%;
}

.item {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  background-size: cover;
  border: 1px solid #e5e5e5;
}

.main {
  margin-left: 4.2px;
  position: relative;
  width: 97.4%;
  height: 110px;
  overflow: hidden;
  border-radius: 5px;
  object-fit: cover;
  object-position: top;
  box-shadow: none;
}
.main:hover {
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: #eee;
  transition: all 0.2s ease-in-out;
}
#homePage {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  /* padding-left: 5px; */
  padding-top: 30px;
}
</style>
