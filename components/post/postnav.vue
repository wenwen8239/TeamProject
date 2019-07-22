<template>
  <div class="menus-body">
    <div class="menus-div">
      <div class="biao">
        <ul>
          <li
            @mouseover="show(index)"
            @mouseout="noshow()"
            v-for="(item,index) in CityData"
            :key="index"
          >
            <div>
              <span>{{item.type}}</span>
              <i class="el-icon-arrow-right icons"></i>
            </div>
            <div class="nei" v-show="connst===index">
              <nuxt-link v-for="(item2,index2) in item.children" :key="index2" :to="`/post?city=${item2.city}`">
                <i>{{index2+1}}</i>
                <strong>{{item2.city}}</strong>
                <span>{{item2.desc}}</span>
              </nuxt-link>
              <i class="borders"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tuijian">
      <p>推荐城市</p>
      <nuxt-link to="#">
        <img src="../../static/pic_sea.jpeg" alt />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      CityData: [],
      connst: -1
    };
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      // console.log(res.data.data,123);
      if (res.status == 200) {
        this.CityData = res.data.data;
        this.$emit( "setCityData", this.CityData );
      }
    });
  },
  methods: {
    show(index) {
      this.connst = index;
    },
    noshow() {
      this.connst = -2;
    }
  }
};
</script>
<style lang="less" scoped>
.biao {
  // display: inline-block;
  border: 1px solid #ddd;
  border-bottom: none;
  border-right: none;
  .nei {
  width: 350px;
  background: #fff;
  position: absolute;
  top: 81px;
  left: 520px;
  border: 1px solid #ddd;
  border-left: none;
  z-index: 4;
  .borders {
    height: 37px;
    border-left: 1px solid #ddd;
    position: absolute;
    top: 164px;
    left: 0;
  }
  a {
    // vertical-align: middle;
    display: block;
    height: 40px;
    line-height: 40px;
    i {
      font-style: oblique;
      margin-left: 20px;
      margin-right: 5px;
      color: orange;
      font-size: 24px;
    }
    strong {
      margin: 0 5px;
      color: orange;
      font-weight: 400;
      &:hover {
        text-decoration: underline;
      }
    }
    span {
      color: #999;
      font-size: 14px;
      margin: 0 5px;
      font-weight: 400;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
  .icons {
    // color:#ddd;
    font-size: 20px;
    margin-left: 135px;
  }
  li {
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 0 20px;
    background: #fff;
    z-index: 5;
    &:hover {
      color: orange;
      border-right: none;
    }
  }
}

.tuijian {
  margin-top: 15px;
  p {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  a {
    img {
      margin-top: 10px;
      width: 100%;
    }
  }
}
</style>


