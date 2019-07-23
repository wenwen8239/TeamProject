<template>
  <div class="artc">
    <div class="meg">
      <div class="user">
        <i>
          <img :src="$axios.defaults.baseURL+data.account.defaultAvatar" alt />
        </i>
        <span class="userName">{{data.account.nickname}}</span>
        <span class="usertime">time</span>
        <span class="shunX">{{data.level}}</span>
      </div>
      <div class="content">
        <div class="Digu">
          <div class="pingl">{{data.content}}</div>
          <Item class="item" v-if="data.parent!==undefined" :data="data.parent"></Item>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "Item",
  props: {
    data: {
      type: Object,
      default: {
        parent: {
          account: {}
        }
      }
    }
  },
  mounted() {
    console.log(this.data)
  }
};
</script>

<style lang="less" scoped>
// 评论
.artc {
  width: 100%;
  padding: 10px;
  // border: 1px solid #aaa;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-top: 1px solid #ddd;
  .meg {
    padding-bottom: 10px;
    .user {
      i {
        img {
          width: 15px;
          height: 15px;
        }
      }
      .userName {
        font-size: 12px;
        color: #666;
      }
      .usertime {
        font-size: 12px;
        color: #999;
      }
      .shunX{
        float: right;
      }
    }
    .content {
      padding: 0 15px 0 15px;
    }
  }
  .item {
    border: 1px solid #ddd;
    margin: 10px;
    width: 95%;
  }
}
</style>
