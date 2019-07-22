<template>
  <div class="index">
    <el-container>
      <el-aside width="260px">
        <!-- 左侧导航栏 -->
        <PostNav @setCityData='setCityData'/>
      </el-aside>
      <el-main id='you' width="700px">
        <!-- 写游记 -->
        <Mains :data='miansCityData'/>
        <!-- 内容 -->
        <Mainx @setListData='setListData'/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import PostNav from "@/components/post/postNav.vue";
import Mains from "@/components/post/mains.vue";
import Mainx from "@/components/post/mainx.vue";
export default {
  data() {
    return {
      mainsListData:[

      ],
      miansCityData:[]
    };
  },
  mounted () {
  },
  components: {
    PostNav,
    Mains,
    Mainx
  },
  methods: {
    setListData(arr){
      this.mainsListData = arr
    },
    setCityData(arr){
      this.miansCityData = arr
    }
  }
};
</script>

<style lang="less" scoped>
  section{
    width: 1000px;
    margin: 0 auto;
    padding-top: 20px;
  }
</style>

