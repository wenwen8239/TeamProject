<template>
  <div class="pingL">
    <div class="user">
      <div class="userid">
        <img src="" alt />
        <span>昵称</span>
        <span>time</span>
        <i>1</i>
      </div>
      <div class="user-content">
        <span>内容</span>
      </div>
      <div class="user-img">
        <img src alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: []
    };
  }
};
</script>

<style lang="less" scoped>
// 评论
.pingL {
  width: 100%;
  border: 1px #666 solid;
  .user {
    border-bottom: 1px #ccc dashed;
    padding: 20px 20px 5px;
  }
  .userid {
    height: 24px;
    line-height: 24px;
    margin-bottom: 5px;
    img {
      vertical-align: middle;
      width: 20px;
      height: 20px;
      padding-bottom: 3px;
    }
    span {
      &:nth-child(2) {
        font-size: 12px;
        color: #666;
      }
      &:nth-child(3) {
        font-size: 12px;
        color: #999;
      }
    }
    i {
      font-weight: normal;
      font-size: 12px;
      float: right;
    }
  }
  .user-content {
    text-indent: 2em;
    font-size: 14px;
    margin-bottom: 15px;
  }
  .user-img {
    width: 100px;
    height: 100px;
    border: 1px #ccc dashed;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>
