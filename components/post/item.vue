<template>
  <div class="userComments">
    <p>
      <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" alt />
      <span>54645</span>
      <span>2019-07-23 9:24</span>
    </p>
    <div>
      <!-- <item :data='data.parent'/> -->
      你好啊
    </div>
  </div>
</template>

<script>
export default {
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
  },
  mounted() {
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
  }
};
</script>

<style lang="less" scoped>
.userComments {
  border-bottom: 1px dashed #ddd;
  padding: 20px 20px 5px;
  p {
    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }
}
</style>
