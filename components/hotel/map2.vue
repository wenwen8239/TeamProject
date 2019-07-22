<template>
<!-- 测试2 -->
  <div id="container"></div>

</template>

<script>

export default {
  data() {
    return {
      arr:[]
    };
  },
  methods:{
    // getmaps(){
    //    this.$axios({
    //     url: "/hotels?city=74"
    //   }).then(res => {
    //     // console.log(res.data.data);
    //     const { data } = res.data;     
    //     data.forEach(e => {
    //       // console.log(e.location);
    //       this.arr.push(e.location);
    //     });
    //   });
    // }
  },
  mounted() {
    
    this.$axios({
        url: "/hotels?city=74"
      }).then(res => {
        // console.log(res.data.data);
        const { data } = res.data;     
        data.forEach(e => {
          // console.log(e.location);
          this.arr.push(e.location); 
        });
       console.log(this.arr)
      });
      var markers = this.arr
      // console.log(markers)



    window.onLoad = function() {
      var map = new AMap.Map("container", {
        resizeEnable: true,
        center: [118.9213, 31.75649],
        zoom: 8
      });

      map.clearMap();// 清除地图覆盖物
      // var markers 
      console.log(markers)
      var icon = [
        {icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png"},
        {icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-2.png"},
        {icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-3.png"},
        {icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-4.png"},
        {icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-5.png"},
        {icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-6.png"},
        {icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-7.png"},
        {icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-8.png"},
        {icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-10.png"},
        {icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-11.png"},
        {icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-12.png"},
      ]
      
      




      // var markers = [
      //   {
      //     icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png",
      //     position:31.32846821,
      //     longitude:118.8718107
      //   },
      //   {
      //     icon:
      //       "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-2.png",
      //     position: [118.787727, 32.057976]
      //   },
      //   {
      //     icon:
      //       "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-3.png",
      //     position: [118.732506, 32.126942]
      //   },
      //   {
      //     icon:
      //       "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-4.png",
      //     position: [118.9213, 31.75649]
      //   }
      // ];


      // var markers = [
      //   { icon:
      //      "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-4.png",
      //     latitude:31.32846821,
      //     longitude:118.8718107} 
      // ]    

      // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
     
      markers.forEach(function(marker) {
        new AMap.Marker({
          // content:marker.length,
          map: map,
          // icon: marker.icon,
          position: [marker.longitude+[0], marker.latitude+[0]],
          offset: new AMap.Pixel(-13, -30)
        });
      });
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
/deep/.amap-icon{
  img{
    width: 20px;
  }
}
</style>
