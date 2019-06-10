<template>
  <div>
    <sticky scroll-box="bookList" :check-sticky-support="false" :offset="46">
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
    <div id="bookList">
      <flexbox :gutter="0" wrap="wrap" align="stretch" justify="space-around">
        <flexbox-item :span="1/2" v-for="item of dataList" :key="item.id">
          <div class="card-container">
            <div class="card" @click="showDetail(item)">
              <div class="cardImg">
                <!-- <x-img
                  :src="'http://stuava.oss-cn-beijing.aliyuncs.com/'+item.id+'.jpg'"
                  :default-src="dftAva"
                  class="bookAvator"
                ></x-img> -->
                <x-img
                  :src="'/static/avators/'+item.id+'.jpg'"
                  :default-src="dftAva"
                  class="bookAvator"
                ></x-img>
              </div>
              <p style="font-weight:bold">{{item.name}}</p>
              <p
                style="font-size:0.8em;color:#999"
              >{{item.province}}·{{item.city}}·{{item.district}}</p>
              <p style="font-size:0.8em;color:#999">{{item.company}}</p>
              <p style="font-size:0.8em;color:#999">{{item.position}}</p>
            </div>
          </div>
        </flexbox-item>
      </flexbox>

      <divider v-if="noMore">没有更多了</divider>
      <x-button
        @click.native="getPageListData"
        v-else
        plain
        type="primary"
        style="border-radius:99px;margin-top:10px"
      >加载更多</x-button>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showDetailDialog" class="dialog-demo" hide-on-blur @on-hide="clearQr">
        <div class="detail-box">
          <div class="cardImg" style="height:120px;">
            <x-img
              :src="'/static/avators/'+detailItem.id+'.jpg'"
              :default-src="dftAva"
              class="bookAvator"
              style="height:100px;width:100px"
            ></x-img>
          </div>
          <p style="font-weight:bold;font-size:1.2em;margin-bottom:10px">{{detailItem.name}}</p>
        </div>
        <form-preview :body-items="detailInfoList"></form-preview>
        <div class="detail-box">
          <flexbox>
            <flexbox-item>
              <a :href="'tel:'+detailItem.tel">
                <x-button type="primary" plain style="border-radius:90px;font-size:13px">拨打电话</x-button>
              </a>
            </flexbox-item>
            <flexbox-item>
              <x-button
                type="warn"
                plain
                style="border-radius:90px;font-size:13px"
                @click.native="genQR(detailItem)"
              >保存至手机</x-button>
            </flexbox-item>
          </flexbox>
        </div>
        <div v-if="showQR" style="text-align:center;margin:2vw auto;">
          {{qrNoticeText}}
          <div id="qrcode"></div>
        </div>
        

        <div @click="showDetailDialog=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
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
      tabChoice: "通讯录",
      dataList: [],
      currentPage: 1,
      pageSize: 10,
      noMore: false,
      src: "",
      dftAva: require("../assets/dftavatar.jpg"),
      showDetailDialog: false,
      detailItem: {},
      detailInfoList: [
      ],
      qrcode:null,
      showQR:false,
      qrNoticeText:"二维码生成中..."
    };
  },
  created() {
    this.checkLogin();
    this.getPageListData();
  },
  methods: {
    getPageListData() {
      var newData = getBookPageList(this.pageSize, this.currentPage);
      this.dataList = this.dataList.concat(newData);
      if (newData.length < this.pageSize) {
        this.noMore = true;
      }
      this.currentPage++;
    },
    checkLogin() {
      if (window.localStorage.getItem("token") == null) {
        this.$router.push("/home");
      }
    },
    showDetail(item) {
      this.detailItem = item;
      this.detailInfoList = [];
      if (item.province) {
        this.detailInfoList.push({
          label: "所在城市",
          value: item.province + item.city + item.district
        });
      }
      if (item.company) {
        this.detailInfoList.push({
          label: "单位/学校",
          value: item.company
        });
      }
      if (item.position) {
        this.detailInfoList.push({
          label: "职务",
          value: item.position
        });
      }
      if (item.tel) {
        this.detailInfoList.push({
          label: "联系电话",
          value: item.tel
        });
      }
      if (item.mail) {
        this.detailInfoList.push({
          label: "电子邮箱",
          value: item.mail
        });
      }
      this.showDetailDialog = true;
    },
    genQR(item) {
      this.qrNoticeText = "二维码生成中...";
      this.showQR = true;
      var content = `
        BEGIN:VCARD
        VERSION:3.0
        FN:${item.name}
        TEL;CELL;VOICE:${item.tel}
        EMAIL;PREF;INTERNET:${item.mail}
        ORG:${item.company}
        TITLE:${item.position}
        ADR;WORK:${item.province + item.city + item.district}
        END:VCARD
      `;
        setTimeout(()=>{
          this.qrcode = new QRCode('qrcode', {
            width: 200,  
            height: 200,
            text: content, // 二维码地址
            colorDark : "#000",
            colorLight : "#fff",
            correctLevel: 3
          })
          this.qrNoticeText = "长按识别下方二维码即可添加至通讯录";
        },500);
        
        
      },
      clearQr(){
        if(this.qrcode){
          this.qrcode.clear();
          document.getElementById("qrcode").innerHTML = ""
        }
        this.showQR = false;
        
      },
      tabChange(index){
        if(index ===1){
          this.$router.push("/album");
        }
      }
  }
};

</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
#bookList {
  width: 100%;
  box-sizing: border-box;
  padding: 2vw;
}
.card-container {
  text-align: left;
  box-sizing: border-box;
  height: 100%;
  padding: 1vw;
  color: #444;
  /* background-color: #9dcfff; */
  border-radius: 4px;
}
.card {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1vw;
  /* height:20px; */
  text-align: center;
  background-color: #eee;
  border: 1px dashed #ddd;
  border-radius: 4px;
}
.cardImg {
  width: 100%;
  height: 100px;
}
.bookAvator {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px;
}
.flexItem {
  align-content: stretch;
}
.vux-close {
  margin-top: 8px;
  margin-bottom: 8px;
}
.detail-box {
  box-sizing: border-box;
  padding: 3vw;
}
.weui-form-preview__hd {
  display: none;
}
#qrcode{
  width:50vw;
  height:50vw;
  margin:0 auto
}
#qrcode img{
  width:50vw;
  height:50vw;
}
@media screen and (min-width: 768px) {
  .detail-box{
    padding: 3vh
  }
  #qrcode{
    width:20vh;
    height:20vh;
  }
  #qrcode img{
    width:20vh;
    height:20vh;
  }
}
</style>
