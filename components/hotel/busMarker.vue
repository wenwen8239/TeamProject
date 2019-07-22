<template>
    <div class="bigbox">
        <div class="box">
            <el-row class="textbottom">
                <span v-for="(item,index) in ['风景','交通']" :key="index" @click="handleClick(index)" :class="{ active: index === current }"> 
                    {{item}}
                </span> 
            </el-row> 
           <div class="solcik" v-if="current === 0">
               <ul>
                   <li>
                       <span>高淳老街</span>
                       <span>1.03公里</span>
                   </li>
                   <li>
                       <span>红太阳广场</span>
                       <span>0.60公里</span>
                   </li>
                   <li>
                       <span>甘霖广场</span>
                       <span>0.15公里</span>
                   </li>
                   <li>
                       <span>跬步居</span>
                       <span>0.12公里</span>
                   </li>
                   <li>
                       <span>凤岭公园</span>
                       <span>0.28公里</span>
                   </li>
                   <li>
                       <span>红宝丽广场</span>
                       <span>0.67公里</span>
                   </li>
                   <li>
                       <span>人民广场</span>
                       <span>1.96公里</span>
                   </li>
                   <li>
                       <span>高淳婚礼文化广场</span>
                       <span>0.63公里</span>
                   </li>
                   <li>
                       <span>红红的太阳</span>
                       <span>0.58公里</span>
                   </li>
                   <li>
                       <span>泮池园</span>
                       <span>0.76公里</span>
                   </li>

               </ul>
           </div>
            <div class="solcik1" v-if="current === 1">
               <ul>
                   <li>
                       <span>甘霖路口(公交站)</span>
                       <span>0.09公里</span>
                   </li>
                   <li>
                       <span>凤岭公园(公交站)</span>
                       <span>0.24公里</span>
                   </li>
                   <li>
                       <span>停车场(镇兴大厦西南)</span>
                       <span>0.11公里</span>
                   </li>
                   <li>
                       <span>镇兴大厦停车场</span>
                       <span>0.01公里</span>
                   </li>
                   <li>
                       <span>高淳(地铁站)</span>
                       <span>1.48公里</span>
                   </li>
                   <li>
                       <span>停车场(镇兴大厦西)</span>
                       <span>0.15公里</span>
                   </li>
                   <li>
                       <span>怡城花园(公交站)</span>
                       <span>0.45公里</span>
                   </li>
                   <li>
                       <span>停车场(甘霖路)</span>
                       <span>0.18公里</span>
                   </li>
                   <li>
                       <span>停车场(牡丹路)</span>
                       <span>0.17公里</span>
                   </li>
                   <li>
                       <span>停车场(春泉路)</span>
                       <span>0.19公里</span>
                   </li>

               </ul>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 非常重要的变量，记录当前显示的下标
            current: 0
        }
    },

    methods: {
        handleClick(index){
            this.current = index;
        }
    }
}
</script>

<style lang="less" scoped>
.bigbox{
    // border: 1px solid #000;
     height: 400px;
    padding: 12px;
   
}

.textbottom{
    color: #303133;
    padding-bottom: 10px;
    span{
        margin-right: 10px;
        padding: 10px 10px;
        &:hover{
            color:#409eff;
        }
    }
   

    &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
}
    
}
.solcik{
    margin-top: 18px;
    font-size: 14px;
    color: #666666;
    overflow:scroll;
    overflow-x:auto;
    width:300px; 
    height:380px;
    ul{
        // width: 400px;
        padding-right: 10px;
        li{
            display: flex;
            justify-content: space-between;
            line-height: 50px;
            span{
                flex: 1;
                &:last-child{
                     text-align:right;
                 }
            } 
        }
    }
}
.solcik1{
    margin-top: 15px;
    font-size: 14px;
    color: #666666;
    overflow:scroll;
    overflow-x:auto;
    width:300px; 
    height:380px;
    ul{
        // width: 400px;
        padding-right: 10px;
        li{
            display: flex;
            justify-content: space-between;
            line-height: 50px;
            span{
                flex: 1;
                &:last-child{
                     text-align:right;
                 }
            } 
        }
    }
}
.active{
    color:#409eff;
    // padding-bottom: 10px;
    border-bottom: 4px solid #409eff;
}
</style>
