<template>
  <div class="comt">
    <!-- 文本域部分 -->
    <h3>评论</h3>
    <div class="tera">
      <textarea style="resize:none;" placeholder="说点什么吧"></textarea>
    </div>
    <!-- 上传图片部分 -->
    <div class="updatabtn">
      <div class="updata">
        <el-upload
          action="http://127.0.0.1:1337/upload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          name="files"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img :src="dialogImageUrl" alt />
        </el-dialog>
        <el-button type="primary" class="upbtn">主要按钮</el-button>
      </div>
    </div>
    <!-- 评论部分 -->
    <myItem :data="comment"/>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      class="fenYe"
    ></el-pagination>
  </div>
</template>

<script>
import myItem from "@/components/post/item.vue";
export default {
  data() {
    return {
      currentPage4: 4,
      // 文章id
      articleId: "",
      comment: [],
      loading: false,
      //文章id
      dialogImageUrl: "",
      dialogVisible: false,
      textarea: ""
    };
  },
  components: {
    myItem
  },
  methods: {
    //分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList, "sdas");
    },
    handlePictureCardPreview(file) {
      console.log(file);
      //   this.dialogImageUrl = file.url;
      //   this.dialogVisible = true;
    },
    // 获取评论
    getTree() {
      this.$axios({
        url: "/posts/comments",
        params: {
          post: this.articleId
        }
      }).then(res => {
        this.comment = res.data.data;
      });
    }
  },
  watch: {
    $route() {
      this.articleId = this.$route.query.id;
      this.getTree();
    }
  },
  mounted() {
    this.articleId = this.$route.query.id;
    this.getTree();
  }
};
</script>
<style lang="less" scoped>
.comt {
  width: 70%;
  h3 {
    font-weight: normal;
    margin-bottom: 15px;
  }
  .tera {
    width: 100%;
    height: 54px;
    margin-bottom: 10px;
    > textarea {
      &::-webkit-input-placeholder {
        font-size: 14px;
        color: #ccc;
      }
      &:focus {
        border: 1px aqua solid;
      }
      padding: 3px 15px;
      border: 0;
      width: 100%;
      height: 100%;
      outline: 0;
      border-radius: 5px;
      border: 1px #ccc solid;
      box-sizing: border-box;
    }
  }
  //   上传图片
  .updatabtn {
    position: relative;
    margin-bottom: 30px;
    /deep/.el-upload {
      width: 100px;
      height: 100px;
      position: relative;
      /deep/i {
        position: absolute;
        top: 35px;
        left: 35px;
      }
    }
    .upbtn {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  // 评论
  .pingLun {
    width: 100%;
    border: 1px #666 solid;
  }
}
</style>

