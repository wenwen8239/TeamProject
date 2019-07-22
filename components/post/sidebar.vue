<template>
  <div class="sidebar">
    <h3>相关攻略</h3>
    <div class="monik" v-for="(item,index) in comment" :key="index">
      <nuxt-link :to="`/post/detail?id=${item.id}`" class="pingLun">
        <div class="pingLun-pl">
          <el-row>
            <el-col :span="8" class="imag">
              <img src alt />
            </el-col>
            <el-col :span="16">
              <el-row class="pingLun-cp">{{item.title}}</el-row>
              <el-row class="pingLun-time">{{time}} 阅读 {{item.city}}</el-row>
            </el-col>
          </el-row>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      //评论
      time: "",
      comment: []
    };
  },
  methods: {
    getXiangQ() {
      const time = new Date();
      this.time = moment(time).format("YYYY-MM-DD HH:mm:ss");
      this.$axios({
        url: "/posts/recommend"
      }).then(res => {
        this.comment = res.data.data;
        if (this.comment.length > 5) {
          this.comment.length = 5;
        }
      });
    }
  },
  mounted() {
    this.getXiangQ();
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
      cursor: pointer;
      margin-top: 20px;
      width: 100%;
      height: 80px;
      .imag {
        height: 80px;
        background-color: #ddd;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .pingLun-cp {
        height: 67px;
        padding-left: 5px;
      }
      .pingLun-time {
        font-size: 12px;
        padding-left: 5px;
      }
    }
  }
}
</style>

