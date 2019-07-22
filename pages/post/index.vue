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
import PostNav from '@/components/post/postnav'
import Mains from '@/components/post/mains'
import Mainx from '@/components/post/mainx'
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
.index {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  
}
.el-main{
    padding:0;
    padding-left: 40px;
  }
</style>

