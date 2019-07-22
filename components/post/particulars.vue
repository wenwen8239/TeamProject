<template>
  <div class="part">
    <!-- 标题 -->
    <div class="head-title">
      <h1>{{parContent.title}}</h1>
    </div>
    <!-- 阅读 -->
    <div class="yueD">
      <span>你好：2019-05-22 10:57</span>
      <span>阅读：2983</span>
    </div>
    <!-- 文章内容 -->
    <div class="part-content" v-html="parContent.content">{{parContent.content}}</div>
    <!-- 收藏点赞 -->
    <div class="shouChang">
      <el-row :gutter="24">
        <el-col :span="3" :push="6">
          <div class="grid-content bg-purple">
            <span>
              <i class="el-icon-edit"></i>评论(100)
            </span>
          </div>
        </el-col>
        <el-col :span="3" :push="6">
          <div class="grid-content bg-purple">
            <span @click="collect">
              <i :class="icon"></i>收藏
            </span>
          </div>
        </el-col>
        <el-col :span="3" :push="6">
          <div class="grid-content bg-purple">
            <span>
              <i class="el-icon-share"></i>分享
            </span>
          </div>
        </el-col>
        <el-col :span="3" :push="6">
          <div class="grid-content bg-purple">
            <span @click="getZan">
              <i class="el-icon-check"></i>点赞(30)
            </span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
    
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      //id
      userId: {},
      icon: "el-icon-star-off",
      token: "",
      id: 4,
      gl: {},
      parContent: {},
      side: []
    };
  },
  methods: {
    // 文章数据
    getWenZ() {
      this.id = this.$route.query.id;
      this.$axios({
        url: "/posts",
        params: {
          id: this.id
        }
      }).then(res => {
        //标题
        this.parContent = res.data.data[0];
        this.side = this.parContent;
        this.$store.commit("postDetail/setSide", this.side);
        //内容
      });
      this.token = this.$store.state.user.userInfo.token;
      const {
        user: { id }
      } = this.$store.state.user.userInfo;
      this.userId = id;
    },
    collect() {
      this.$axios({
        url: "/posts/star",
        params: {
          id: this.parContent.id
        },
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).then(res => {
        if (res.data.status === 0) {
          this.$message.success("收藏成功");
        }
      });
    },
    getZan() {
      this.$axios({
        url: "/posts/like",
        params: {
          id: this.parContent.id
        },
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).then(res => {
        if (res.data.status === 0) {
          this.$message.success("点赞成功");
        }
      });
    }
  },

  watch: {
    $route() {
      this.getWenZ()
    }
  },
  mounted() {
    this.getWenZ()
  }
};
</script>

<style lang="less" scoped>
.part {
  position: relative;
  width: 70%;
  .yueD {
    width: 100%;
    height: 50px;
    position: relative;
    span {
      display: block;
      height: 50px;
      line-height: 50px;
      color: #999;
      &:nth-child(1) {
        position: absolute;
        top: 0;
        right: 130px;
      }
      &:nth-child(2) {
        position: absolute;
        top: 0;
        right: 20px;
      }
    }
  }
  .head-title {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px #ccc solid;
  }
  .part-content {
    width: 100%;
    margin-bottom: 35px;
    /deep/ img {
      max-width: 700px !important;
    }
  }
  .shouChang {
    width: 100%;
    height: 80px;
    text-align: center;
    span {
      cursor: pointer;
      display: block;
      width: 60px;
      height: 60px;
      font-size: 12px;
    }
    /deep/i {
      color: orange;
      font-size: 30px;
      margin: 0 10px;
    }
  }
}
</style>

