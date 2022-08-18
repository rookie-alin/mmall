<script lang="ts" setup>
import { Ref, ref } from "vue";
import {useRouter} from 'vue-router'
const router=useRouter();

    let carNum:Ref<number>=ref(0);
const goRegister=()=>{
    router.push('/register')
}
</script>

<template>
    <div class="header">
        <div class="left">
            <span class="login">登录</span>
            <span class="zhuce" @click="goRegister">注册</span>
        </div>
        <div class="right">
            <span>购物车({{carNum}})</span>
            <span>我的订单</span>
            <span>我的mmall</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .header{
        position: fixed;
        width: 100%;
        height: 30px;
        background-color:#eeeeee;
        color: #999;
        line-height: 30px;
        font-size: 12px;
        display: flex;
        justify-content: space-around;
        span{
            cursor: pointer;
            margin-right: 10px;
        }
    }
</style>