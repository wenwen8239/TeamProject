<template>
  <section>
    <el-row type="flex" justify="space-between">
      <!-- 攻略详情 -->
      <el-col :span="16" style="margin-bottom:20px;">
        <DetailsContent/>
      </el-col>

      <!-- 相关攻略 -->
      <DetailsRelated/>
    </el-row>

    <!-- 攻略评论 -->
    <el-row type="flex">
      <el-col :span="16">
        <DetailsComment/>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import DetailsRelated from "@/components/post/detailsRelated.vue";
import DetailsContent from "@/components/post/detailsContent.vue";
import DetailsComment from "@/components/post/detailsComment.vue";
export default {
  // 注册组件
  components: {
    DetailsRelated,
    DetailsContent,
    DetailsComment
  }
}
</script>

<style lang="less" scoped>
  section{
    width: 1000px;
    margin: 0 auto;
    padding-top: 20px;
  }
</style>

