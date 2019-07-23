<template>
  <!-- 酒店筛选条件组件 -->
  <div class="list-filter">
    <el-row type="flex" justify="space-between">
      <!-- 价格 -->
      <el-col :span="6">
        <div>
          <span>价格</span>
          <span style="float:right;">0-4000</span>
        </div>
        <!-- 滑块 -->
        <el-slider v-model="priceRange" :max='4000' @change="handleChangePrice"></el-slider>
      </el-col>
      <!-- 住宿等级 -->
      <el-col :span="5">
        <div>住宿等级</div>
        <el-select v-model="levels" placeholder="不限" @change="handleLevelChange">
          <el-option v-for="(item,index) in filtersData.levels" :key="index" :label="item.name" :value="item.level"></el-option>
        </el-select>
      </el-col>
      <!-- 住宿类型 -->
      <el-col :span="5">
        <div>住宿类型</div>
        <el-select v-model="type" placeholder="不限" @change="handleChangeType">
          <el-option v-for="(item,index) in filtersData.types" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-col>
      <!-- 酒店设施 -->
      <el-col :span="5">
        <div>酒店设施</div>
        <el-select v-model="assets" placeholder="不限">
          <el-option v-for="(item,index) in filtersData.assets" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-col>
      <!-- 酒店品牌 -->
      <el-col :span="4">
        <div>酒店品牌</div>
        <el-select v-model="brands" placeholder="不限">
          <el-option v-for="(item,index) in filtersData.brands" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  prop: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      priceRange: 4000,
      levels: '',
      type: '',
      assets: '',
      brands: '',
      filtersData: {}
    }
  },
  mounted() {
    this.$axios({
      url: '/hotels/options'
    })
    .then(res => {
      const {data} = res.data;
      this.filtersData = data
    })
  },
  methods: {
    // 拖动滑块更改价格
    handleChangePrice(value) {
      console.log(value)
      this.$emit('changePrice',value)
    },
    // 切换酒店等级
    handleLevelChange(value) {
      console.log(value)
      this.$emit('changeLevel',value)
    },
    // 切换酒店类型
    handleChangeType(value) {
      console.log(value)
      this.$emit('changeType',value)
    }
  }
}
</script>

<style lang="less" scoped>
  .list-filter {
    font-size: 14px;
    color: #666;
    border: 1px solid #ddd;
    padding: 10px 20px;
    > .el-row {
      > .el-col {
        padding: 5px 20px;
        border-right: 1px solid #ddd;
        box-sizing: border-box;
        .el-slider {
          width: 200px;
        }
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          border-right: none;
        }
      }
      /deep/ .el-input__inner {
        border: none;
      }
    }

  }
</style>


