<template>
  <div class="mainx">
    <div v-for="(item,index) in pageData" :key="index">
      <div class="mainx_nei mains" v-if="item.images.length>2">
        <nuxt-link :to="`/post/detail?id=${item.id}`" class="biao_tou">{{item.title}}</nuxt-link>
        <p>{{item.summary}}</p>
        <el-row type="flex" class="row-bg">
          <nuxt-link :to="`/post/detail?id=${item.id}`" v-for="(item2,index2) in item.images" :key="index2">
            <img :src="item2" alt />
          </nuxt-link>
        </el-row>
        <el-row type="flex" class="userzhan" justify="space-between">
          <el-row type="flex" class="user">
            <span>
              <i class="el-icon-location-outline"></i>
              {{item.cityName}}
            </span>
            <div>
              <span>by</span>
              <nuxt-link :to="`/post?id=${item.id}`">
                <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" alt />
              </nuxt-link>

              <nuxt-link to="#">{{item.account.nickname}}</nuxt-link>
            </div>
            <span>
              <i class="el-icon-view"></i>
              {{item.watch}}
            </span>
          </el-row>
          <div class="zan">{{item.watch}}赞</div>
        </el-row>
      </div>
      <el-row type="flex" class="row-bg mainx_nei2" justify="space-between" v-else>
        <div>
          <nuxt-link class="tu" :to="`/post/detail?id=${item.id}`">
            <img src="../../static/wKgBZ1octoCABhgLAAafahORRLs91.jpeg" alt />
          </nuxt-link>
        </div>
        <div id='xiayi' class="mainx_nei">
          <nuxt-link :to="`/post/detail?id=${item.id}`" class="biao_tou">{{item.title}}</nuxt-link>
          <p>{{item.summary}}</p>
          <el-row type="flex" class="userzhan" justify="space-between">
            <el-row type="flex" class="user">
              <span>
                <i class="el-icon-location-outline"></i>
                {{item.cityName}}
              </span>
              <div>
                <span>by</span>
                <nuxt-link to="#">
                  <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" alt />
                </nuxt-link>

                <nuxt-link to="#">{{item.account.nickname}}</nuxt-link>
              </div>
              <span>
                <i class="el-icon-view"></i>
                16565
              </span>
            </el-row>
            <div class="zan">431赞</div>
          </el-row>
        </div>
      </el-row>
    </div>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.listData.length"
      ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [],
      pageData:[],
      pageIndex:1,
      pageSize:4,

    };
  },

  methods: {
    getdata(val) {
      val = this.$route.query.city;
      this.$axios({
        url: "/posts",
        params: {
          city: val
        }
      }).then(res => {
        console.log(res.data.data);

        if (res.status == 200) {
          var arr = res.data.data;

          arr.forEach(v => {
            if (v.images.length > 3) {
              v.images.length = 3;
            }
          });

          this.listData = arr;
          this.setDataList();
          this.$emit("setListData", this.listData);
        }
      });
    },
    setDataList(){
      const start = (this.pageIndex-1)* this.pageSize
      const end= start + this.pageSize
      this.pageData = this.listData.slice(start,end)
    },
    // 切换条数数据
    handleSizeChange(value){
      this.pageSize = value
      this.setDataList()
    },
    // 点击页面数据
    handleCurrentChange(value){
      this.pageIndex = value
      this.setDataList()
    }
  },
  watch: {
    $route() {
      this.getdata();
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>
<style lang="less" scoped>
.mainx {
  padding: 20px 0;
  #xiayi{
    width: 460px;
  }
}
.mains {
  border-bottom: 1px solid #ddd;
}
.mainx_nei {
  .zan {
    color: orange;
  }
  .userzhan {
    margin-top: 10px;
    // border-bottom: 1px solid #ddd;
  }
  .user {
    height: 50px;
    line-height: 31px;
    font-size: 12px;
    color: #666;
    img {
      width: 16px;
      height: 16px;
      border-radius: 10px;
      vertical-align: middle;
    }

    div {
      padding: 0 10px;
      a {
        color: orange;
      }
    }
  }
  p {
    margin-bottom: 15px;
    font-size: 14px;
    color: #666;
    height: 60px;
    overflow: hidden;
  }
  .biao_tou {
    display: block;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 18px;
    &:hover {
      color: orange;
    }
  }
  .row-bg {
    a {
      display: block;
      width: 220px;
      height: 150px;
      &:nth-child(-n + 2) {
        margin-right: 20px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.mainx_nei2 {
  margin-top: 20px;
  border-bottom: 1px solid #ddd;

  .tu {
    margin-right: 20px;
    display: block;
    width: 220px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.el-pagination {
  text-align: center;
  margin: 40px 0 20px;
}
</style>
