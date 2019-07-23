<template>
<<<<<<< HEAD
  <div class="userComments">
    <p>
      <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" alt />
      <span>54645</span>
      <span>2019-07-23 9:24</span>
    </p>
    <div>
      <!-- <item :data='data.parent'/> -->
      你好啊
=======
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
          <Item v-if="data.parent!==undefined" :data="data.parent"></Item>
        </div>
        <div class="pingl">{{data.content}}</div>
      </div>
      <!-- <ul>
      <li class="content">
        <img :src="$axios.defaults.baseURL +data.account.defaultAvatar" alt />
        <span class="name">{{data.account.nickname}}</span>
        <span class="time">time</span>
        <p>{{data.content}}</p>
        <Item v-if="data.parent!==undefined" :data="data.parent"></Item>
      </li>
      </ul>-->
>>>>>>> 23af3a5e17325635aab1600994f4358b201b6f62
    </div>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: "item",
  // props: {
  //   data: {
  //     type: Object,
  //     defauil: {}
  //   }
  // },
  data() {
    return {
      listdata:[]
    };
=======
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
>>>>>>> 23af3a5e17325635aab1600994f4358b201b6f62
  },
  mounted() {
<<<<<<< HEAD
    this.$axios({
      url: "/posts/comments",
      params: {
        post: this.$route.query.id
      }
    }).then(res => {
      // console.log(res, 123)
      if (res.status == 200) {
        const arr = res.data.data;
        arr.filter((v) => {
          v.account
        })
      }
    });
=======
>>>>>>> 23af3a5e17325635aab1600994f4358b201b6f62
  }
};
</script>

<style lang="less" scoped>
<<<<<<< HEAD
.userComments {
  border-bottom: 1px dashed #ddd;
  padding: 20px 20px 5px;
  p {
    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
=======
// 评论
.artc {
  width: 100%;
  .meg {
      // border:1px #999 solid;
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
>>>>>>> 23af3a5e17325635aab1600994f4358b201b6f62
    }
  }
}
</style>
