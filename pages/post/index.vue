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
import DetailsRelated from "@/components/post/detailsRelated.vue";
import DetailsContent from "@/components/post/detailsContent.vue";
import DetailsComment from "@/components/post/detailsComment.vue";
export default {
  data() {
    return {
      mainsListData:[

      ],
      miansCityData:[]
    };
  },
  mounted () {
    console.log(this.$store.state.user.userInfo.user.defaultAvatar,123);
    
    
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

