<template>
  <!-- 右边相关攻略列表模块 -->
  <div class="detailsstrategy">
    <h2>相关攻略</h2>
    <div class="retaledList">
      <nuxt-link to="/" class="retaledItem">
        <div class="post-imgText">
          <div class="post-img">
            <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt="">
          </div>
          <div class="post-text">
            <div>机票特卖会</div>
            <p>2019-07-21 11:23 阅读 </p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/" class="retaledItem">
        <div class="post-imgText">
          <div class="post-img">
            <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt="">
          </div>
          <div class="post-text">
            <div>机票特卖会</div>
            <p>2019-07-21 11:23 阅读 </p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/" class="retaledItem">
        <div class="post-imgText">
          <div class="post-img">
            <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt="">
          </div>
          <div class="post-text">
            <div>机票特卖会</div>
            <p>2019-07-21 11:23 阅读 </p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/" class="retaledItem">
        <div class="post-imgText">
          <div class="post-img">
            <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt="">
          </div>
          <div class="post-text">
            <div>机票特卖会</div>
            <p>2019-07-21 11:23 阅读 </p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/" class="retaledItem">
        <div class="post-imgText">
          <div class="post-img">
            <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt="">
          </div>
          <div class="post-text">
            <div>机票特卖会</div>
            <p>2019-07-21 11:23 阅读 </p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  .detailsstrategy{
    width: 280px;
    height: 650px;
    box-sizing: border-box;

    h2{
      font-size: 20px;
      font-weight: normal;
      padding-bottom: 10px;
      border-bottom: 1px solid #dddddd;
    }

    .retaledList{
      width: 100%;
      height: 600px;

      .retaledItem{
        display: block;
        padding: 20px 0;
        border-bottom: 1px solid #ddd;

        .post-imgText{
          width: 100%;
          height: 80px;

          .post-img{
            float: left;
            width: 100px;
            height: 80px;

            img{
              width: 100%;
              height:100%;
            }
          }

          .post-text{
            float:right;
            width: 170px;
            height: 80px;
            position: relative;

            div{
              height: 50px;
              line-height: 25px;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }

            p{
              position: absolute;
              bottom: 0;
              left: 0;
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
  }
</style>

