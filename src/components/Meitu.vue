<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-07 08:28:28
 * @LastEditTime: 2021-11-11 14:48:44
 * @LastEditors: MArio
-->
<template>
  <div id="meitu">
    <div class="meituTablCumls">
      <div class="meituTablItem">
        <img class="meituTablItemImg" :src="ranImg1" />
      </div>
      <div class="meituTablItem">
        <img class="meituTablItemImg" :src="ranImg2" />
      </div>
    </div>
    <div class="meituTablCumls">
      <div class="meituTablItem">
        <img class="meituTablItemImg" :src="ranImg3" />
      </div>
      <div class="meituTablItem">
        <img class="meituTablItemImg" :src="ranImg4" />
      </div>
    </div>
    <div
      ref="box"
      @scroll="handleScroll($event)"
      class="meituCardCumls Filmscro"
    >
      <div class="meituCardCItem" v-for="item in imgSrc" :key="item.id">
        <img
          class="meituTablItemImg"
          @click="rangeImg($event)"
          :src="item.imgSrc"
        />
        <!-- 提供图片链接 -->
        <!-- <div :class="meituDownloadLink">{{ item.imgSrc }}</div> -->
      </div>
    </div>
    <div v-show="mask == 'Off'" class="box">
      <div class="boxTdiv">
        <!-- 标题头加关闭按钮 -->
        <div class="boxTitleModel">
          <div class="boxTitleModelLeft"></div>
          <div class="boxTitleModelRight">
            <div class="boxTitleButton" @click="closeModelTile()">关闭</div>
          </div>
        </div>
        <div
          class="boxcontentModel"
          style="word-wrap: break-word; word-break: normal; text-align: center"
        >
          <br />
          复制链接到游览器去手动下载[狗头]保命<br /><br />

          <span>{{ nameTitleModel }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var cheerio = require("cheerio");
export default {
  name: "meitu",
  data() {
    return {
      mask: "No",
      nameTitleModel: "",
      imgSrc: [],
      PageIndex: [1, 2],
      pageNumber: 1,
      ranImg1: "",
      ranImg2: "",
      ranImg3: "",
      ranImg4: "",
    };
  },
  created() {
    for (var i = 3; i < 202; i++) {
      this.PageIndex.push(i);
    }
    this.doInit();
  },
  methods: {
    closeModelTile() {
      this.mask = "No";
    },
    rangeImg(e) {
      this.mask = "Off";
      this.nameTitleModel = e.currentTarget.getAttribute("src");
      // alert(e.currentTarget.getAttribute("src"));
      // prompt("图片链接",e.currentTarget.getAttribute("src"));
    },
    doInit() {
      axios
        .get("https://pic.netbian.com/4kfengjing", { timeout: 120000 })
        .then((resp) => {
          var arr1 = [];
          var $ = cheerio.load(resp.data);
          $("ul.clearfix li").each(function (i, e) {
            var pro = {
              imgSrc:
                "https://pic.netbian.com" +
                $($(e).children("a")).children("img").attr("src"),
              href: $(e).children("a").attr("href"),
            };

            arr1.push(pro);
          });
          this.imgSrc = arr1;

          //取得四个随机数
          this.ranImg1 = this.imgSrc[Math.floor(Math.random() * 10)].imgSrc;
          this.ranImg2 = this.imgSrc[Math.floor(Math.random() * 10)].imgSrc;
          this.ranImg3 = this.imgSrc[Math.floor(Math.random() * 10)].imgSrc;
          this.ranImg4 = this.imgSrc[Math.floor(Math.random() * 10)].imgSrc;
          //定时5秒刷新下
          setInterval(this.sayRanImg, 12000);
          // console.log(this.imgSrc[Math.floor(Math.random() * 10)]);
        })
        .catch((err) => {
          console.log(err);
        });
      //
    },
    sayRanImg() {
      this.ranImg1 = this.imgSrc[Math.floor(Math.random() * 15)].imgSrc;
      this.ranImg2 = this.imgSrc[Math.floor(Math.random() * 15)].imgSrc;
      this.ranImg3 = this.imgSrc[Math.floor(Math.random() * 15)].imgSrc;
      this.ranImg4 = this.imgSrc[Math.floor(Math.random() * 15)].imgSrc;
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

          //定一个一次性闹钟,延迟下加载，降低被封杀风险

          axios
            .get(
              "https://pic.netbian.com/4kfengjing/index_" +
                this.PageIndex[this.pageNumber] +
                ".html",
              { timeout: 120000 }
            )
            .then((resp) => {
              var arr1 = [];
              var $ = cheerio.load(resp.data);
              $("ul.clearfix li").each(function (i, e) {
                var pro = {
                  imgSrc:
                    "https://pic.netbian.com" +
                    $($(e).children("a")).children("img").attr("src"),
                  href: $(e).children("a").attr("href"),
                };

                arr1.push(pro);
              });

              for (var i = 0; i < arr1.length; i++) {
                _this.imgSrc.push(arr1[i]);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    },
  },
};
</script>

<style>
.meituDownloadLink {
  padding-left: 3px;
  padding-top: 3px;
  position: absolute;
  z-index: 2;
  width: 200px;
  /* height: 30px; */
  top: 0;
  background-color: #eaeaea;
  margin-top: 22%;
  margin-left: 23%;
  margin-right: 50%;
  border-radius: 10px;
  word-wrap: break-word;
  word-break: normal;
}
.meituCardCItem {
  width: 95%;
  height: 160px;
  background-color: #f9f9f9;
  /* border: 1px solid #e5e5e5; */
  margin: 7px;
  border-radius: 5px;
  position: relative;
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
  padding-top: 32px;
}
</style>
