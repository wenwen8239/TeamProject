<template>
  <div class="details">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/hotel' }">{{hotelInfo.real_city}}酒店</el-breadcrumb-item>
      <el-breadcrumb-item>{{hotelInfo.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 酒店信息 -->
    <div class="name-info">
        <h2 class="title">{{hotelInfo.name}}
          <span>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
        </h2>
        <div class="title-en">{{hotelInfo.alias}}</div>
        <div class="address">
          <i class="iconfont iconlocation"></i>
          <span>{{hotelInfo.address}}</span>
        </div>
    </div>
    <!-- 酒店图片 -->
    <div class="pic-info">
      <el-row type="flex">
        <el-col :span="16" class="pic-left">
          <img :src="hotelInfo.photos" alt="">
        </el-col>
        <el-col :span="10" class="pic-right">
          <div v-for="(item,index) in pics" :key="index" >
            <img :src="item.imgUrl" alt="">
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 价格来源 -->
    <div class="price-from">
      <div class="title">
        <el-row>
          <el-col :span="10">价格来源</el-col>
          <el-col :span="10">低价房型</el-col>
          <el-col :span="4">最低价格/每晚</el-col>
        </el-row>
      </div>
      <div class="list" v-for="(item,index) in hotelInfo.products" :key="index">
        <el-row>
          <el-col :span="10">{{item.name}}</el-col>
          <el-col :span="10">{{item.bestType}}</el-col>
          <el-col :span="4"><span>￥{{item.price}}</span>起<i class="el-icon-arrow-right height-light"></i></el-col>
        </el-row>
      </div>
    </div>
    <!-- Map -->
    <Map2 />
    <!-- 服务 -->
    <div class="serve">
      <!-- 基本信息 -->
      <el-row type="flex">
        <el-col :span="4">基本信息</el-col>
        <el-col :span="20">
          <el-row type="flex" justify="space-between">
            <span>入住时间: 14:00之后</span>
            <span>离店时间: 12:00之前</span>
            <span>{{hotelInfo.creation_time}}</span>
            <span>酒店规模: {{hotelInfo.roomCount}}间客房</span>
          </el-row>
        </el-col>
      </el-row>
      <!-- 主要设施 -->
      <el-row type="flex">
        <el-col :span="4">主要设施</el-col>
        <el-col :span="20"><span>wifi</span></el-col>
      </el-row>
      <!-- 停车服务 -->
      <el-row type="flex">
        <el-col :span="4">停车服务</el-col>
        <el-col :span="20">免费;提供免费停车位;酒店停车场，免费</el-col>
      </el-row>
      <!-- 品牌信息 -->
      <el-row type="flex">
        <el-col :span="4">品牌信息</el-col>
        <el-col :span="20">希尔顿</el-col>
      </el-row>
    </div>
    <!-- 用户评论 -->
    <div class="comment">
      <h3>10条真实用户评论</h3>
      <!-- 评分 -->
      <div class="grade">
        <el-row type="flex">
          <el-col style="color: #666;">
            <div>总评数：{{hotelInfo.all_remarks}}</div>
            <div>好评数：{{hotelInfo.good_remarks}}</div>
            <div>差评数：{{hotelInfo.bad_remarks}}</div>
          </el-col>
          <el-col class="stats">
            <div class="stamp">推荐</div>
            <el-rate
              v-model="stars"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
          </el-col>
          <el-col style="color: orange">环境</el-col>
          <el-col style="color: orange">产品</el-col>
          <el-col style="color: orange">服务</el-col>
        </el-row>
      </div>
    </div>
    <HotelComment/>
  </div>
</template>

<script>
import HotelComment from '@/components/hotel/hotelComment'
import Map2 from '@/components/hotel/map2'
export default {
  components:{
    HotelComment,
    Map2   
  },
  data() {
    return {
      // 酒店数据
      hotelInfo: {},
      pics: [
        {imgUrl: 'http://157.122.54.189:9093/images/hotel-pics/1.jpeg'},
        {imgUrl: 'http://157.122.54.189:9093/images/hotel-pics/2.jpeg'},
        {imgUrl: 'http://157.122.54.189:9093/images/hotel-pics/3.jpeg'},
        {imgUrl: 'http://157.122.54.189:9093/images/hotel-pics/4.jpeg'},
        {imgUrl: 'http://157.122.54.189:9093/images/hotel-pics/5.jpeg'},
        {imgUrl: 'http://157.122.54.189:9093/images/hotel-pics/6.jpeg'}
      ],
      stars: 3
    }
  },
  mounted() {
    setTimeout(() => {
      this.$axios({
        url: '/hotels',
        params: {
          id: this.$route.query.id
        }
      })
      .then(res => {
        // console.log(res)
        const { data } = res.data
        this.hotelInfo = data[0]
        // console.log(this.hotelInfo,123)
      })
    },1)
  }
}
</script>

<style lang="less" scoped>
  .details {
    width: 1000px;
    margin: 0 auto;
    .el-breadcrumb {
      margin: 15px 0;
    }
    .name-info {
      h2 {
        font-size: 24px;
        color: #333;
        font-weight: normal;
        i {
          color: orange;
        }
      }
      .title-en {
        font-size: 14px;
        color: #666;
        margin: 5px 0;
      }
      .address {
        font-size: 14px;
        color: #666;
        i {
          color: #4196ff;
        }
      }
    }
    .pic-info {
      margin: 40px 0;
      height: 370px;
      .pic-left {
        img {
          width: 640px;
          height: 360px;
        }
      }
      .pic-right {
        margin-left: 15px;
        div {
          width: 160px;
          height: 110px;
          margin: 0 12px 15px 0;
          float: left;
          img {
            width: 100%;
          }
        }
      }
    }
    .price-from {
      .title {
        height: 47px;
        line-height: 47px;
        color: #909399;
        font-weight: 700;
        font-size: 14px;
        border-bottom: 1px solid #ebeef5;
      }
      .list {
        .el-col {
          color: #606266;
          font-size: 14px;
          height: 49px;
          line-height: 49px;
          border-bottom: 1px solid #ebeef5;
        }
        span {
          color: orange;
          font-size: 16px;
          margin-right: 10px;
        }
        i {
          color: orange;
          margin-left: 10px;
        }
        &:hover {
          background-color: #f5f7fa;
        }
      }
    }
    .map {
      height: 360px;
      margin: 40px 0;
      border: 1px solid #000;
    }
    .serve {
      margin-bottom: 40px;
      > .el-row {
        font-size: 14px;
        color: #666;
        > .el-col {
          padding: 20px 10px;
          border-bottom: 1px solid #ebeef5;
          &:first-child {
            color: #000;
          }
        }
        &:nth-child(2) {
          span {
            border-radius: 4px;
            padding: 4px 10px;
            background-color: #eee;
          }
        }
      }
    }
    .comment {
      h4 {
        font-weight: 700;
      }
      .stats {
        position: relative;
        .stamp {
          position: absolute;
          left: 20px;
          top: -25px;
          font-size: 20px;
          color: orange;
          border: 2px solid #fa3;
          text-align: center;
          line-height: 70px;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          opacity: .25;
          transform: rotate(-30deg);
        }
      }
      .grade {
        padding: 20px 0;
      }
    }
  }
</style>


