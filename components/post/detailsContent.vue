<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">旅游攻略</el-breadcrumb-item>
      <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 标题 + 时间 -->
    <h1>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h1>
    <div class="post-info">
      <span>攻略：2019-05-22 10:57</span>
      <span>阅读：2991</span>
    </div>

    <!-- 攻略文章 -->
    <div class="post-content">
      <p>大家对塞班岛总存在着这样的误解，带你6000块花式玩转塞班。</p>
      <p>怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</p>
      <p>
        <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt />
        <span>图：塞班岛。 by第5季旅游</span>
      </p>
      <h2>一、怎样用6000块玩转塞班？</h2>
      <p>怎样去塞班？可以转机也可以直飞，转机大多会酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</p>
      <p>
        <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt />
        <span>图：塞班岛。 by第5季旅游</span>
      </p>
      <h2>二、怎样用6000块玩转塞班？</h2>
      <p>怎样去塞班？可以转机也可以直飞，转机大多会酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</p>
    </div>


  </div>
</template>

<script>
import DetailsComment from "@/components/post/detailsComment"

export default {};
</script>

<style lang="less" scoped>
h1 {
  font-size: 2em;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}

.post-info {
  color: #999;
  padding: 20px 0;
  text-align: right;
}

.post-content {
  p {
    img{
      margin-top: 15px;
    }
    span {
      font-size: 14px;
      display: block;
      color: #999;
      text-align: left;
      margin-bottom: 10px;
    }
  }
  h2{
    padding: 10px 0;
  }
}


  // .is-justify-center{
  //   justify-content:center;
  //   display: flex;
  //   box-sizing: border-box;
  // }
</style>
