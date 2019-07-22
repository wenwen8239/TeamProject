<template>
  <div class="mians">
    <el-row type="flex" class="shuru" justify="space-between">
      <input class="shuchu" type="text" placeholder="请输入想去的地方，比如：'广州'" 
      @keyup.enter="submit"
       v-model="ValueCity"/>
      <nuxt-link :to='`/post?city=${this.ValueCity}`' class="el-icon-search icon"></nuxt-link>
    </el-row>
    <!-- `/post?city=${item2.city}` -->
    <div class="mians_tuijian" >
      <span>推荐:</span>
      <nuxt-link 
      :to="`/post?city=${item.city}`"
      v-for="(item,index) in mainsCity" 
      :key="index"
      >{{item.city}}</nuxt-link>
      <!-- <nuxt-link to="#">上海</nuxt-link>
      <nuxt-link to="#">北京</nuxt-link> -->
    </div>
    <el-row type="flex" justify="space-between" class="mians_gonglie">
      <h4 >推荐攻略</h4>
      <div>
        <el-button class="el-icon-edit" type="primary" @click='create()'> 写游记</el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainsCity:[
        {city:"广州"},
        {city:"成都"},
        {city:"北京"},
      ],
      ValueCity:''
    }
  },
  props: {
    data:{
      type:Array,
      default:[]
    }
  },
  watch: {
    // 监听路由地址栏数据变化
    $route(){
      this.ValueCity = this.$route.query.city
    }
  },
  methods: {
    submit(){
      this.$router.push(`/post?city=${this.ValueCity}`)
    },
    create(){
      this.$router.push('/post/create')
    }
  }
};
</script>

<style lang="less" scoped>
.shuru {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 3px solid orange;
  // box-sizing: border-box;
  // padding-bottom: 10px;
  .icon {
    color: orange;
    font-size: 24px;
    line-height: 36px;
    margin-right: 10px;
  }
  input {
    flex: 1;
    margin: 0 20px;
    // line-height: 40px;
    height: 33px;
    border: none;
    outline: none;
    // width: 300px;
  }
}
.mians_tuijian {
  font-size: 12px;
  color: #666;
  margin-top: 10px;
  margin-bottom: 20px;
  a {
    padding-left: 10px;
    &:hover {
      color: orange;
    }
  }
}
.mians_gonglie {
  // padding-bottom: 10px; 
  border-bottom: 1px solid #ddd;
  h4 {
    height: 50px;
    font-weight: 400;
    font-size: 20px;
    border-bottom: 2px solid orange;
    color: orange;
  }
}
</style>
