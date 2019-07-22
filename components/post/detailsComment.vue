<template>
  <div class="cmt-main">
    <!-- 攻略分享 + 点赞 -->
    <div class="post-share">
      <div class="share-item">
        <i class="iconfont iconpinglun"></i>
        <span>评论</span>({{total}})
      </div>
      <div class="share-item">
        <i class="iconfont iconstar1"></i>
        <span>收藏</span>
      </div>
      <div class="share-item">
        <i class="iconfont iconfenxiang"></i>
        <span>分享</span>
      </div>
      <div class="share-item">
        <i class="iconfont iconding"></i>
        <span>点赞</span>
      </div>
    </div>

    <!-- 分类标题 -->
    <h3 class="cmt-title">评论</h3>

    <!-- 评论域 -->
    <div class="cmt-input" :span="16">
      <textarea class="input-text" rows="3" placeholder="说点什么鬼话吧"></textarea>
    </div>

    <!-- 上传区域 -->
    <div class="cmt-upload">
      <!-- 上传头像 -->
      <div class="upload-img">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>

      <!-- 提交上传 -->
      <div class="upload-submit">
        <el-button type="primary">提交</el-button>
      </div>
    </div>

    <!-- 评论列表 -->
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-info">
          <img src="" alt="">
          动力机
          <i>2019-06-25 10:41</i>
          <span>1</span>
        </div>
        <div class="cmt-ctt">
          <div class="cmt-new">
            <p class="cmt-message">
              大家对塞班岛总存在着这样的误解，带你6000块花式玩转塞班。
            </p>
            <div class="el-row el-row--flex"></div>
            <div class="cmt-crtl"><a href="javascript:;">回复</a></div>
          </div>
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-info">
          <img src="" alt="">
          动力机
          <i>2019-06-25 10:41</i>
          <span>1</span>
        </div>
        <div class="cmt-ctt">
          <div class="cmt-new">
            <p class="cmt-message">
              大家对塞班岛总存在着这样的误解，带你6000块花式玩转塞班。
            </p>
            <div class="el-row el-row--flex"></div>
            <div class="cmt-crtl"><a href="javascript:;">回复</a></div>
          </div>
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-info">
          <img src="" alt="">
          动力机
          <i>2019-06-25 10:41</i>
          <span>1</span>
        </div>
        <div class="cmt-ctt">
          <div class="cmt-new">
            <p class="cmt-message">
              大家对塞班岛总存在着这样的误解，带你6000块花式玩转塞班。
            </p>
            <div class="el-row el-row--flex"></div>
            <div class="cmt-crtl"><a href="javascript:;">回复</a></div>
          </div>
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-info">
          <img src="" alt="">
          动力机
          <i>2019-06-25 10:41</i>
          <span>1</span>
        </div>
        <div class="cmt-ctt">
          <div class="cmt-new">
            <p class="cmt-message">
              大家对塞班岛总存在着这样的误解，带你6000块花式玩转塞班。
            </p>
            <div class="el-row el-row--flex"></div>
            <div class="cmt-crtl"><a href="javascript:;">回复</a></div>
          </div>
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-info">
          <img src="" alt="">
          动力机
          <i>2019-06-25 10:41</i>
          <span>1</span>
        </div>
        <div class="cmt-ctt">
          <div class="cmt-new">
            <p class="cmt-message">
              大家对塞班岛总存在着这样的误解，带你6000块花式玩转塞班。
            </p>
            <div class="el-row el-row--flex"></div>
            <div class="cmt-crtl"><a href="javascript:;">回复</a></div>
          </div>
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-info">
          <img src="" alt="">
          动力机
          <i>2019-06-25 10:41</i>
          <span>1</span>
        </div>
        <div class="cmt-ctt">
          <div class="cmt-new">
            <p class="cmt-message">
              大家对塞班岛总存在着这样的误解，带你6000块花式玩转塞班。
            </p>
            <div class="el-row el-row--flex"></div>
            <div class="cmt-crtl"><a href="javascript:;">回复</a></div>
          </div>
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-info">
          <img src="" alt="">
          动力机
          <i>2019-06-25 10:41</i>
          <span>1</span>
        </div>
        <div class="cmt-ctt">
          <div class="cmt-new">
            <p class="cmt-message">
              大家对塞班岛总存在着这样的误解，带你6000块花式玩转塞班。
            </p>
            <div class="el-row el-row--flex"></div>
            <div class="cmt-crtl"><a href="javascript:;">回复</a></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页区域 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[1, 2, 3, 4, 5]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,

      // 当前页
      pagenum: 1,
      // 每页显示的记录数
      pagesize: 10,
      value2: true,
      userList: [],
      total: 10

      // 添加用户评论数据
    };
  },

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 数据初始化 - 封装
    init() {
      // 获取所有用户数据
      getCmtList({
        query: this.query,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      })
        .then(res => {
          // console.log(res)
          this.getCmtList = res.data.data.users;
          this.total = res.data.data.total;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      // 重置pagesize,再次发送请求
      this.pagesize = val;
      // 再次拉取数据
      this.init();
    },
    // 切换当前页码
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      // 讲pagenum重新赋值,再次发起数据请求
      this.pagenum = val;
      this.init();
    }
  }
};
</script>

<style lang="less" scoped>
.cmt-main {
  .post-share {
    padding: 50px 0 30px 0;
    justify-content: center;
    display: flex;
    box-sizing: border-box;
    .share-item {
      color: #999;
      margin: 0 30px;
      text-align: center;
      cursor: pointer;
      i {
        display: block;
        color: #ffa500;
        font-size: 30px;
        font-weight: normal;
      }
      span {
        color: #999999;
        font-size: 14px;
      }
    }
  }
  .cmt-title {
    font-weight: normal;
    margin-bottom: 20px;
  }
  .cmt-input {
    .input-text {
      width: 100%;
      resize: none;
      border-radius: 5px;
      font-size: 14px;
      color: #999;
      padding: 5px 10px;
      outline: none;
      box-sizing: border-box;
    }
  }

  .cmt-upload {
    height: 100px;
    margin-top: 10px;
    margin-bottom: 20px;
    position: relative;
    .upload-img {
      position: absolute;
      top: 0;
      left: 0;
      /deep/ .el-upload {
        height: 100px;
        width: 100px;
        line-height: 100px;
      }
    }
    .upload-submit {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .cmt-list {
    border: 1px solid #ddd;
    .cmt-item{
      border-bottom: 1px dashed #ddd;
      padding: 20px 20px 5px;
      .cmt-info{
        margin-bottom: 10px;
        font-size: 12px;
        color: #666;
      }
      .cmt-ctt{
        padding: 0 0 0 30px;
        .cmt-new{
          .cmt-message{
            margin-top: 10px
          }
          .el-row--flex {
            display: flex;
          }
          .el-row {
            box-sizing: border-box;
          }
          .cmt-crtl{
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            color: #1e50a2;
            text-align: right;
            a{
              text-decoration: none;
              color: inherit;
            }
          }
        }
      }
    }
  }
}
</style>