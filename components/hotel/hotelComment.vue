<template>
  <!-- 评论 -->
  <div class="comment-item">
    <el-row>
      <el-col :span="3">
        <div class="userImg">
          <el-row type="flex">
            <el-col :span="12">
              <img src="https://n4-q.mafengwo.net/s11/M00/64/81/wKgBEFsmE0WAPbqnAAAOwSUlOKY63.jpeg?imageMogr2%2Fthumbnail%2F%2196x96r%2Fgravity%2FCenter%2Fcrop%2F%2196x96%2Fquality%2F90" alt="">
            </el-col>
            <el-col :span="12">
              <p style="color: orange;">aoi</p>
              <p style="color: red;margin-top: 5px">LV.8</p>
            </el-col>
          </el-row>
          <p>2019-7-11</p>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="pics"></div>
        <div style="margin-bottom: 5px;">冲鸭!</div>
        <el-input type="textarea" placeholder="添加回复"></el-input>
        <el-row><el-button type="primary" size="small">回复</el-button></el-row>
        <CommentNested/>
      </el-col>
    </el-row>
    <el-row v-for="(item,index) in comment" :key="index">
      <el-col :span="3">
        <div class="userImg">
          <el-row type="flex">
            <el-col :span="12">
              <img src="https://n4-q.mafengwo.net/s11/M00/64/81/wKgBEFsmE0WAPbqnAAAOwSUlOKY63.jpeg?imageMogr2%2Fthumbnail%2F%2196x96r%2Fgravity%2FCenter%2Fcrop%2F%2196x96%2Fquality%2F90" alt="">
            </el-col>
            <el-col :span="12">
              <p style="color: orange;">aoi</p>
              <p style="color: red;margin-top: 5px">LV.8</p>
            </el-col>
          </el-row>
          <p>{{item.time}}</p>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="pics"></div>
        <div style="margin-bottom: 5px;">{{item.content}}</div>
        <el-input type="textarea" placeholder="添加回复"></el-input>
        <el-row><el-button type="primary" size="small">回复</el-button></el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CommentNested from '@/components/hotel/commentNested'
export default {
  components: {
    CommentNested
  },
  data() {
    return {
      comment: [
        {time: '2019-6-25',content: '非常好'},
        {time: '2019-6-25',content: '非常好'},
        {time: '2019-6-25',content: '非常好'},
        {time: '2019-6-25',content: '非常好'},
        {time: '2019-6-25',content: '非常好'},
      ]
    }
  },
  mounted() {
    this.$axios({
      url: '/hotels/comments',
      params: {
        hotel: parseInt(this.$route.query.id)
      }
    })
    .then(res => {
      // console.log(res,12345)
    })
  }
}
</script>

<style lang="less" scoped>
  .comment-item {
    border-top: 1px dashed #eee;
    padding: 20px 0;
    margin-top: 10px;
    .userImg {
      font-size: 14px;
      img {
        display: inline-block;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 2px solid #fa3;
        overflow: hidden;
        vertical-align: middle;
      }
      p {
        color: #666;
      }
    }
    .el-button {
      float: right;
      margin-top: 10px;
      // display: none;
    }
    /deep/ .el-textarea__inner {
      height: 25px;
      transition: all .35s;
      &:focus {
        height: 80px;
        .el-button {
          display: none;
        }
      }
    }
  }
</style>


