
<template>
  <div id="cuitu">
    <div
      ref="box"
      class="CuituCardCumls Filmscro"
      @scroll="handleScroll($event)"
    >
      <div class="meituCardCItem" v-for="item in imgSrc" :key="item.id">
        <img class="meituTablItemImg" :src="item.imgSrc" />
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
var cheerio = require("cheerio");
export default {
  name: "cuitu",
  data() {
    return {
      imgSrc: [],
      PageIndex: [1, 2],
      pageNumber: 1,
    };
  },
  created() {
    for (var i = 3; i < 145; i++) {
      this.PageIndex.push(i);
    }
    this.doInit();
  },
  methods: {
    doInit() {
      axios
        .get("https://pic.netbian.com/4kmeinv", { timeout: 120000 })
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

          //定一个一次性闹钟,延迟下加载，降低被封杀风险
       
            axios
              .get(
                "https://pic.netbian.com/4kmeinv/index_" +
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
.CuituCardCumls {
  width: 100%;
  height: 100%;
  /* margin-top: 8%; */
}
#cuitu {
  width: 100%;
  height: 90%;
  background-color: #f9f9f9;
  /* padding-left: 5px; */
  padding-top: 32px;
}
</style>
