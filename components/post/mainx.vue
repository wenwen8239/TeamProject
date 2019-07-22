<template>
  <div class="mainx">
    <div
    class="mainx_nei mains"
    v-for="(item,index) in listData"
    :key="index"
    >
      <nuxt-link to="/post/detail" class="biao_tou">{{item.title}}</nuxt-link>
      <p>{{item.summary}}</p>
      <el-row type="flex" class="row-bg" justify="space-between">
        <nuxt-link
        to="#"
        v-for="(item2,index2) in item.images"
        :key="index2"
        >
          <img :src="item2" alt />
        </nuxt-link>
        <!-- <nuxt-link to="#">
          <img src="../../static/wKgBZ1octoCABhgLAAafahORRLs91.jpeg" alt />
        </nuxt-link>
        <nuxt-link to="#">
          <img src="../../static/wKgBZ1octoCABhgLAAafahORRLs91.jpeg" alt />
        </nuxt-link> -->
      </el-row>
      <el-row type="flex" class="userzhan" justify="space-between">
        <el-row type="flex" class="user">
          <span>
            <i class="el-icon-location-outline"></i>
            成都市
          </span>
          <div>
            <span>by</span>
            <nuxt-link to="#">
              <img src="../../static/wKgBZ1octoCABhgLAAafahORRLs91.jpeg" alt />
            </nuxt-link>

            <nuxt-link to="#">地球发动机</nuxt-link>
          </div>
          <span>
            <i class="el-icon-view"></i>
            438
          </span>
        </el-row>
        <div class="zan">31赞</div>
      </el-row>
    </div>
    <el-row type="flex" class="row-bg mainx_nei2" justify="space-between">
      <div>
        <nuxt-link class="tu" to="#">
          <img src="../../static/wKgBZ1octoCABhgLAAafahORRLs91.jpeg" alt />
        </nuxt-link>
      </div>
      <div class="mainx_nei">
        <nuxt-link to="#" class="biao_tou">塞班贵？一定是你的打开方式不对！6000块玩转塞班</nuxt-link>
        <p>大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。1.怎样订机票+酒店性价比最高？机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最</p>
        <el-row type="flex" class="userzhan" justify="space-between">
          <el-row type="flex" class="user">
            <span>
              <i class="el-icon-location-outline"></i>
              成都市
            </span>
            <div>
              <span>by</span>
              <nuxt-link to="#">
                <img src="../../static/wKgBZ1octoCABhgLAAafahORRLs91.jpeg" alt />
              </nuxt-link>

              <nuxt-link to="#">地球发动机</nuxt-link>
            </div>
            <span>
              <i class="el-icon-view"></i>
              438
            </span>
          </el-row>
          <div class="zan">31赞</div>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData:[]
    }
  },
  mounted () {
    this.$axios({
      url:'/posts'
    }).then((res) => {
      console.log(res);
      if(res.status==200){
        this.listData = res.data.data
      }
    })
  }
};
</script>

<style lang="less" scoped>
.mainx {
  padding: 20px 0;
}
.mains{
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
</style>
