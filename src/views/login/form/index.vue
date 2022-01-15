<template>
  <div id="login-board">
    <div id="login-info">
      <div>
        <span>SHEEPY</span>
      </div>
    </div>
    <div id="login-card">
      <div class="login-title">
        <span>账户登录</span>
        <el-divider :style="{ 'background-color': '#cbcbcb' }"></el-divider>
      </div>

      <div class="login-form">
        <el-form
          :model="user"
          :label-position="labelPosition"
          :rules="rules"
          ref="userLogin"
          label-width="120px"
        >
          <el-form-item label="" prop="username">
            <el-input
              v-model="user.username"
              placeholder="请输入用户名/手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              v-model="user.password"
              type="password"
              autocomplete="off"
              placeholder="请输入密码"
              prop="password"
            ></el-input>
          </el-form-item>
          <el-form-item> </el-form-item>
          <el-form-item>
            <el-button class="button-full" type="primary" @click="handleLogin"
              >立即登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div>
        <div class="login-tips">
          <router-link to="/login">忘记密码？</router-link>
          <router-link to="/login">没有账户？立即注册></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>