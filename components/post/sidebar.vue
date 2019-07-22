<template>
  <div class="sidebar">
    <h3>相关攻略</h3>
    <nuxt-link to="#" class="pingLun" v-for="(item,index) in comment" :key="index">
      <div class="pingLun-pl">
        <el-row>
          <el-col :span="8" class="imag"><img src="" alt=""></el-col>
          <el-col :span="16">
            <el-row class="pingLun-cp">{{item.title}}</el-row>
            <el-row class="pingLun-time">{{item.time}}</el-row>
          </el-col>
        </el-row>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
       //评论
      comment: [
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      // const { id } = this.$store.state.postDetail.Side;
      this.$axios({
        url: "/posts/recommend",
      }).then(res => {
        console.log(res);
        this.comment = res.data.data;
      });
    }, 200);
  }
};
</script>

<style lang="less" scoped>
.sidebar {
  margin-top: 20px;
  position: absolute;
  top: 0;
  right: 0;
  width: 28%;
  h3 {
    width: 100%;
    font-weight: normal;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px #ccc solid;
  }
  .pingLun {
    width: 100%;
    display: block;
    height: 121px;
    overflow: hidden;
    border-bottom: 1px #ccc solid;
    .pingLun-pl {
      margin-top: 20px;
      width: 100%;
      height: 80px;
      background-color: pink;
      .imag {
        height: 80px;
        background-color: #ddd;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .pingLun-cp {
        height: 60px;
      }
      .pingLun-time {
        background-color: #999;
      }
    }
  }
}
</style>

