<template>
  <div>
    <p class="hello">
      为了尽量的保证通讯录的数据安全，在入口处增加了身份校验功能。<br/>
      使用 姓名+手机号进行身份验证。<br/>
      此Demo中姓名和手机号输入任意值即可登录。
    </p>

      <x-input title="您的姓名" v-model="yourname" text-align="right" style="background:#fff"></x-input>
      <x-input title="您的手机号" v-model="yourphone" text-align="right" style="background:#fff"></x-input>

      <box gap="10px 10px"> 
        <x-button type="primary" plain style="border-radius:99px;" @click.native="validUser">验证身份</x-button>
      </box>
      <toast v-model="showOk" :time="1000">验证成功</toast>
      <toast v-model="showNotOk" :time="1000" type="cancel">验证失败</toast>
  </div>
</template>

<script>
import { XInput,XButton,Box,Toast } from 'vux'
import { getdata,validataUser } from './common.js'
export default {
  components: {
    XInput,
    XButton,
    Box,
    Toast
    // Group
  },
  // name: "HelloWorld",
  data() {
    return {
      yourname: "",
      yourphone:"",
      showOk:false,
      showNotOk:false
    };
  },
  created(){
    this.checkToken();
  },
  methods:{
    validUser(){
      if(validataUser(this.yourname,this.yourphone)){
        this.showOk = true;
        window.localStorage.setItem("token",this.yourphone);
        this.$router.push("/book");
      }else{
        //demo专用逻辑 Start
        if(this.yourname != "" &&this.yourphone != ""){
          this.showOk = true;
        window.localStorage.setItem("token","test");
        this.$router.push("/book");
        }
        //demo专用逻辑 End
        this.showNotOk = true;
      }
    },
    checkToken(){
      if(window.localStorage.getItem("token")!= null){
        this.$router.push("/book")
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
}
</style>
