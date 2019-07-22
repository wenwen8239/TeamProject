<template>
<!-- 测试1 -->

    <el-row type="flex">
      <el-col :span="16"><div id="container"></div></el-col>
      <el-col :span="8"><BusMarker /></el-col>
    </el-row>



</template>

<script>
import BusMarker from '@/components/hotel/busMarker'
export default {
  components:{
    BusMarker
  },
  data() {
    return {
      mapdata: [],
      arr:[]
    };
  },
  methods:{
    getmaps(){
       this.$axios({
        url: "/hotels?city=74"
      }).then(res => {
        // console.log(res.data.data);
        const { data } = res.data;
        // var arr = [];
        data.forEach(e => {
          // console.log(e.location);
          this.arr.push(e.location);
        });
        // return arr

      });
    }
  },
  mounted() {
    // setTimeout(()=>{

    // },500)
    this.getmaps()
    // console.log(this.arr, 'ftdhthssss')
    window.onLoad = function() {
      var map = new AMap.Map("container", {
        zoom: 11, //级别
        center: [118.8718107, 31.32846821], //中心点坐标
        viewMode: "3D" //使用3D视图
      });

      for (var i = 0; i < this.arr.length; i++) {
          var long = [this.arr[i].longitude, this.arr[i].latitude];
         return marker = new AMap.Marker({
            position: long,
            zIndex: 101,
            // map: map
          });
        }

    //  var  setMark = this.arr.for(ele => {
    //    var long = [ele.longitude, ele.latitude];
    //    marker = new AMap.Marker({
    //         position: long,
    //         zIndex: 101,
    //         map: map
    //       });
    //  })
      //  marker.setMap(map);
      // 创建一个 Marker 实例：
      var marker1 = new AMap.Marker({
        content: `<div>1</div>`,
        position: new AMap.LngLat(118.8718107, 31.32846821), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "南京"
      });

      var marker2 = new AMap.Marker({
        content: `<div>2</div>`,
        position: new AMap.LngLat(118.8818107, 31.33846821), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "南京"
      });

      var markerList = [marker1, marker2];
      // 将创建的点标记添加到已有的地图实例：
      map.add(marker);
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
  // margin-left: 20px;
  // width: 520px;
  height: 460px;
}
/deep/.amap-marker-content {
  display: inline-block;
  width: 18px;
  height: 30px;
  background: url(https://webapi.amap.com/theme/v1.3/markers/b/mark_b.png)
    no-repeat center;
  background-size: 18px 30px;
  text-align: center;
  line-height: 20px;
  color: #fff;
  font-size: 12px;
}
</style>
