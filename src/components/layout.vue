<template>
    <div>
        <div id="common-header">
            <p>纯前端-H5通讯录</p>
        </div>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    #common-header{
        width:100%;
        height:10vh;
        line-height:10vh;
        
        text-align:center;
        color:#fff;
        background:rgb(53,73,94)
    }
    @media screen and (max-width: 768px){
        #common-header{
            font-size:5vw;
        }
    }
    @media screen and (min-width: 768px){
        #common-header{
            font-size:4vh;
        }
    }
    
</style>

