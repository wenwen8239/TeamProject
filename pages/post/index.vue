<template>
  <el-row class="row-bg index" type="flex" justify="space-around">
    <el-col >
      <div class="grid-content bg-purple zuoNav">
        <!-- 左侧导航栏 -->
        <PostNav @setCityData="setCityData" />
      </div>
    </el-col>
    <el-col >
      <div class="grid-content bg-purple-light you">
        <!-- 写游记 -->
        <Mains :data="miansCityData" />
        <!-- 内容 -->
        <Mainx @setListData="setListData" />
      </div>
    </el-col>
  </el-row>
  <!-- <div class="index">
    <el-container>
      <el-aside width="260px">
        左侧导航栏
        <PostNav @setCityData="setCityData" />
      </el-aside>
      <el-main id="you" width="700px">
        写游记
        <Mains :data="miansCityData" />
        内容
        <Mainx @setListData="setListData" />
      </el-main>
    </el-container>
  </div> -->
</template>

<script>
import PostNav from "@/components/post/postNav.vue";
import Mains from "@/components/post/mains.vue";
import Mainx from "@/components/post/mainx.vue";
export default {
  data() {
    return {
      mainsListData: [],
      miansCityData: []
    };
  },
  mounted() {
    // console.log(mainsListData,'897');
    
  },
  components: {
    PostNav,
    Mains,
    Mainx
  },
  methods: {
    setListData(arr) {
      this.mainsListData = arr;
    },
    setCityData(arr) {
      this.miansCityData = arr;
    }
  }
};
</script>

<style lang="less" scoped>
.index {
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
  .zuoNav{
    width: 260px;
  }
  .you{
    width: 700px;
  }
}
</style>

