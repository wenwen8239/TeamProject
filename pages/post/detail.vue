<template>
  <div class="detail">
    <!-- 面包屑 -->
    <div class="mbx">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">旅游攻略</el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 文章内容部分 -->
    <paticulars />
    <!-- 侧边栏部分 -->
    <sidebar />
    <!-- 评论部分 -->
    <comment />
  </div>
</template>

<script>
import paticulars from "@/components/post/particulars.vue";
import sidebar from "@/components/post/sidebar.vue";
import comment from "@/components/post/comment.vue";
export default {
  components: {
    paticulars,
    sidebar,
    comment
  }
};
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  // background-color: pink;
  width: 1000px;
  margin: 0 auto;
  .mbx{
      padding-top:20px;
  }
}
</style>

