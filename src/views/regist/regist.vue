<script lang="ts" setup>
    import {ref,reactive} from "vue";
    import type { FormInstance, FormRules } from 'element-plus';
    const ruleFormRef = ref<FormInstance>()
    const ruleForm = reactive({
        user:'',
        password:'',
        alginPassword:'',
        phone:'',
        email:''

    })
    const rules = reactive<FormRules>({

    })
    // 立即注册
    const sumibt=()=>{

    }
</script>

<template>
    <div class="regist">
        <div class="top">
            <a href="">MMall</a>
        </div>
        <div class="bottom">
            <div class="regist_box">
                <div class="regist_box_top">新用户注册</div>
                <div class="regist_box_bottom">
                    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="auto" class="resgist-ruleForm"
                         status-icon>
                        <el-form-item prop="user">
                            <el-input v-model="ruleForm.user" placeholder="请输入用户名">
                                <template #prepend>
                                    <el-icon><User /></el-icon>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="ruleForm.password" placeholder="请输入密码">
                                <template #prepend>
                                    <el-icon><Lock /></el-icon>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="alginPassword">
                            <el-input v-model="ruleForm.alginPassword" placeholder="请再次输入密码">
                                <template #prepend>
                                    <el-icon><Lock /></el-icon>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="phone">
                            <el-input v-model="ruleForm.phone" placeholder="请输入电话">
                                <template #prepend>
                                    <el-icon><PhoneFilled /></el-icon>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="email">
                            <el-input v-model="ruleForm.email" placeholder="请输入邮箱">
                                <template #prepend>
                                    <el-icon><Message /></el-icon>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="sumbit" @click="sumibt">立即注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="gotoLogin">
                    已有账号，去登录>>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.regist {
    .top {
        width: 100%;
        height: 60px;
        line-height: 60px;

        a {
            margin-left: 200px;
            font-size: 26px;
            font-weight: 700;
            color: #c60023;
            text-decoration: none;
        }
    }

    .bottom {
        width: 100%;
        height: calc(100vh - 60px);
        background-color: #e72955;
        position: relative;

        .regist_box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 500px;
            background-color: white;
            .regist_box_top{
                width: 100%;
                height: 40px;
                line-height: 40px;
                text-align: center;
                border-bottom: 1px solid #ccc;
            }
            .regist_box_bottom{
                padding: 30px;
                width: 80%;
                margin: auto;
                .sumbit{
                    width: 100%;
                    background-color: #e4393c;
                    color: white;
                }
            }

            .gotoLogin{
                position: absolute;
                bottom: 3%;
                right:  10%;
                font-size: 13px;
                color: #847d7d;
                cursor: pointer;
            }
        }


    }
}
</style>