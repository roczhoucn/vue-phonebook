<template>
  <div>
    <sticky scroll-box="AlbumList" :check-sticky-support="false" :offset="46">
      <tab :line-width="1" >
        <tab-item
          :selected="tabChoice === item"
          v-for="(item, index) in tabList"
          @click="tabChoice = item"
          @on-item-click="tabChange"
          :key="index"
        >{{item}}</tab-item>
      </tab>
    </sticky>
    <div id="AlbumList">
        <p style="color:orange">请将手机横置查看照片</p>
        <x-img
            :src="item"
            class="albumImg"
            v-for="item of albumImgs"
            :key="item"
        ></x-img>
        <divider style="margin-top:10px;margin-bottom:20px">没有更多了</divider>
    </div>
  </div>
</template>

<script>
import {
  Sticky,
  Tab,
  TabItem,
  Flexbox,
  FlexboxItem,
  Divider,
  XButton,
  XImg,
  XDialog,
  TransferDomDirective as TransferDom,
  FormPreview
} from "vux";
import { getdata, getBookPageList } from "./common.js";
import { setTimeout } from 'timers';
export default {
  directives: {
    TransferDom
  },
  components: {
    Sticky,
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem,
    Divider,
    XButton,
    XImg,
    XDialog,
    FormPreview
  },
  data() {
    return {
      tabList: ["通讯录", "相册"],
      tabChoice: "相册",
      dataList: [],
      currentPage: 1,
      pageSize: 10,
      noMore: false,
      albumImgs:[
        "http://iph.href.lu/800x1400?text=相册图片1",
        "http://iph.href.lu/800x1400?text=相册图片2",
        "http://iph.href.lu/800x1400?text=相册图片3",
        "http://iph.href.lu/800x1400?text=相册图片4",
        "http://iph.href.lu/800x1400?text=相册图片5",
        "http://iph.href.lu/800x1400?text=相册图片6"
      ]
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {

    checkLogin() {
      if (window.localStorage.getItem("token") == null) {
        this.$router.push("/home");
      }
    },
    
      tabChange(index){
        if(index ===0){
          this.$router.push("/book");
        }
      }
  }
};

</script>

<style scoped>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
#AlbumList {
  width: 100%;
  box-sizing: border-box;
  padding: 2vw;
}
.albumImg{
    width:100%;
    margin-top: 10px;
}
</style>
