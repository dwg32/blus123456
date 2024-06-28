<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form>
                    <h1>Hello</h1>
                    <h2>硅谷甄选项目实战</h2>
                    <el-from-item>
                        <el-input></el-input>
                    </el-from-item>
                    <el-from-item>
                        <el-input type="password"></el-input>
                    </el-from-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped style="scss">
.login_container{
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/雾神.png') no-repeat;
    background-size: cover;
}


</style>