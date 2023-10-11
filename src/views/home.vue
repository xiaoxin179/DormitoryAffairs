<template>
  <!-- 头部导航栏 -->
  <div class="top">
    <ul>
      <li @click="this.$router.push('/culture')">
        <div>宿舍文文化墙</div>
        <div>宿舍文文化墙</div>
      </li>
      <li @click="this.$router.push('/message')">
        <div>邮件服务</div>
        <div>邮件服务</div>
      </li>
      <li @click="this.$router.push('/chat')">
        <div>宿舍公聊</div>
        <div>宿舍公聊</div>
      </li>
      <li @click="this.$router.push('/resource')">
        <div>学习资料共享</div>
        <div>学习资料共享</div>
      </li>
      <li @click="this.$router.push('/learn')">
        <div>打卡学习区</div>
        <div>打卡学习区</div>
      </li>
      <li @click="this.$router.push('/recode')">
        <div>扣分记录</div>
        <div>扣分记录</div>
      </li>
      <li @click="this.$router.push('/tools')">
        <div>工具小栈</div>
        <div>工具小栈</div>
      </li>
      <li @click="this.$router.push('/person')">
        <div>个人信息管理</div>
        <div>个人信息管理</div>
      </li>
      <li @click="this.$router.push('/mangement')">
        <div>成员管理</div>
        <div>成员管理</div>
      </li>
      <div style="margin-left: 30px;position: relative;top:6x;">
          <el-dropdown >
            <el-avatar
                :src="store.user.avatar"
              />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
              <el-dropdown-menu>
                <el-dropdown-item @click="this.$router.push('/update')">修改密码</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      <div style="margin-left:20px;margin-top:10px;font-weight: bolder;font-size: 20px;color:rgb(31, 100, 100)">{{ store.user.name }}</div>
    </ul>
  </div>
  <div>
    <router-view/>
  </div>
</template>
<script setup>
import { useUserStore } from "../stores/user";
import request from "../utils/request";
const store=useUserStore()
const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
  
};
</script>
<style scoped>
.top {
  height: 60px;
  /* 弹性布局 水平+垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 渐变背景 */
  background: linear-gradient(200deg, #ffffff, #dfe9f3);
}
ul {
  /* 让li水平排列 */
  display: flex;
  border-radius: 10px;
}
ul li {
  /* 相对定位 */
  position: relative;
  list-style: none;
  width: 160px;
  height: 50px;
  cursor: pointer;
  /* 开启3D */
  transform-style: preserve-3d;
  /* 设置过渡 */
  transition: 0.5s;
}
ul li div {
  /* 绝对定位 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
/* 每个li元素里的第一个div */
ul li div:first-child {
  background-color: #72afd3;
  transform: translateZ(25px);
}
/* 每个li元素里的最后一个div */
ul li div:last-child {
  background-color: #468fb9;
  transform: translateY(25px) rotateX(-90deg);
}
/* 鼠标移入沿X旋转90度 */
ul li:hover {
  transform: rotateX(90deg);
}
</style>