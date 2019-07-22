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
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
        <el-button type="primary" class="upbtn">主要按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      textarea: ""
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
        console.log(file)
    //   this.dialogImageUrl = file.url;
    //   this.dialogVisible = true;
    }
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
    .upbtn {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>

