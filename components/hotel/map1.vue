<template>
<!-- 测试2 -->
  <div id="container"></div>

</template>

<script>
export default {
  data() {
    return {
      houstList:[]
    };
  },
  methods:{
    
  },
  mounted() {
    
    this.$axios({
      url: "/hotels?city=74",
      // params: { city: this.$route.query.city }
    }).then(res => {
      this.houstList = res.data.data;
      console.log(this.houstList)
    });
    const _this = this;
      



    window.onLoad = function() {
      // 等待页面加载完成之后才执行
      // container是页面的div容器
      var map = new AMap.Map("container", {
        zoom: 11, //级别
        // center: [118.78, 32.07], //中心点坐标
        viewMode: "3D" //使用3D视图
      });
      
     
      // 创建一个 Marker 实例：
      console.log(_this.houstList);
      const arr = [];
      _this.houstList.forEach((item, index) => {
        arr.push(
          new AMap.Marker({
            content: `<div style="display: inline-block;
                width: 22px;
                height: 36px;
                background-image: url(https://webapi.amap.com/theme/v1.3/markers/b/mark_b.png);
                background-size: 22px 36px;
                text-align: center;
                line-height: 24px;
                color: #fff;">${index + 1}</div>`,
            position: new AMap.LngLat(
              item.location.longitude,
              item.location.latitude
            ), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: "北京"
          })
        );
      });
      map.add(arr)
      map.setFitView();
    };
    var key = "06a826ee0fb07dd1d415017681ce0238";
    var url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad`;
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style lang="less" scoped>
#container {
  margin-left: 20px;
  width: 420px;
  height: 360px;
}
</style>
