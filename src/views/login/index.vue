<template>
  <div id="login">
    <div class="m">
      <div id="login-banner">
        <div id="login-maintainer">

        </div>
      </div>
    </div>
    <div class="f">
      <div class="links">
        <router-link to="/about">关于我们</router-link> |
        <router-link to="/contact">联系我们</router-link> |
        <router-link to="/contact">友情链接</router-link>
      </div>
      <div class="copyright">
        <p>Copyright © 2020-2021 macoloco 版权所有</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { reactive, ref, unref, defineComponent } from "vue";

export default {
  name: "Login",
  setup() {
    const userLogin = ref(null);

    const user = reactive({
      username: "",
      password: "",
    });

    const rules = reactive({
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
        {
          min: 3,
          max: 20,
          message: "用户名应为 3-20 个字符",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
        {
          min: 6,
          message: "密码应不少于6位",
          trigger: "blur",
        },
      ],
    });

    const handleLogin = async () => {
      const form = unref(userLogin);
      if (!form) return;
      form.validate((valid) => {
        if (valid) {
          console.log("submit!");
          this.$cookies.set("token", "admin");
          // this.$router.push("/");
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };

    return {
      user,
      rules,
      userLogin,
      handleLogin,
    };
  },
  data() {
    return {
      labelPosition: "top",
    };
  },
  methods: {},
};
</script>

<style>
#login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-image: url("../../assets/images/bg-617537.jpg");
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
}

.m {
  width: 100%;
}

#login-banner {
  width: 1090px;
  height: 780px;
  margin: auto;
  position: relative;
}

#login-maintainer {
  position: absolute;
  top: 35%;
  left: 24%;
  display: flex;
}

#login-info {
  height: 310px;
  width: 165px;
  padding: 25px;
  background-color: rgb(235, 235, 235);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#login-info span {
  font-size: 2.5em;
  font-weight: bold;
  margin-right: 100px;
  color: #499edb;
  font-family: "微软雅黑";
}

#login-card {
  height: 310px;
  width: 340px;
  padding: 25px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#login-card > div {
  margin-bottom: 15px;
}

.login-title {
  font-size: 1.3em;
  font-weight: bolder;
  color: #277cd5;
}

.login-tips {
  font-size: 0.5em;
  display: flex;
  justify-content: space-between;
}

.login-tips > a {
  color: rgb(114, 114, 114);
}

.login-form label {
  padding: 0px !important;
}

.f {
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-full {
  width: 100%;
}

.links {
  margin-top: 20px;
  color: #fff;
}

.links > a {
  padding: 0px 10px;
  color: #ff6767;
  font-family: 微软雅黑;
  font-size: 1.2em;
  font-weight: 700;
}

.copyright {
  color: #ff6767;
}
</style>