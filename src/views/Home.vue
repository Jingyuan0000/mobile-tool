<template>
  <div class="main-page">
    <van-nav-bar title="标题"
                 left-text="返回"
                 right-text=""
                 left-arrow
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />
    <div class="container-flex">
      <div class="container-flex_content">
        <div class="app-list">
          <div class="van-row van-row--flex van-row--justify-space-around">
            <div class="van-col van-col--11"><a href="#/advisory"
                 class="item c1">
                <div class="icon"><i class="iconbase icon-advisory"></i></div>
                <h2>智能法律咨询</h2>
                <p>获得精准的法律意见报告</p>
              </a></div>
            <div class="van-col van-col--11"><a href="#/instrument"
                 class="item c2">
                <div class="icon"><i class="iconbase icon-complaint"></i></div>
                <h2>智能法律文书</h2>
                <p>智能生成专属法律文书</p>
              </a></div>
          </div>
          <div class="van-row van-row--flex van-row--justify-space-around">
            <div class="van-col van-col--11"><a href="#/legalaid"
                 class="item c3">
                <div class="icon"><i class="iconbase icon-legalaid"></i></div>
                <h2>法律援助</h2>
                <p>在线申请及进度查询</p>
              </a></div>
            <div class="van-col van-col--11"><a href="#/mediation"
                 class="item c4">
                <div class="icon"><i class="iconbase icon-mediation"></i></div>
                <h2>人民调解</h2>
                <p>在线申请及进度查询</p>
              </a></div>
          </div>
          <div class="van-row van-row--flex van-row--justify-space-around">
            <div class="van-col van-col--11"><a href="#/lawfirm/list/"
                 class="item c5">
                <div class="icon"><i class="iconbase icon-lawfirm"></i></div>
                <h2>律所查询</h2>
                <p>查询律所和律师信息</p>
              </a></div>
            <div class="van-col van-col--11"><a href="#/lawfirm/lawyer/"
                 class="item c10">
                <div class="icon"><i class="iconbase icon-lawyer"></i></div>
                <h2>律师查询</h2>
                <p>查询律所和律师信息</p>
              </a></div>
          </div>
          <div class="van-row van-row--flex van-row--justify-space-around">
            <div class="van-col van-col--11"><a href="https://yn.e.laway.cn/fagui/#/?source=ynapp"
                 class="item c6">
                <div class="icon"><i class="iconbase icon-law"></i></div>
                <h2>法律法规</h2>
                <p>法律与地方性法规查询</p>
              </a></div>
            <div class="van-col van-col--11"><a href="#/case"
                 class="item c7">
                <div class="icon"><i class="iconbase icon-case"></i></div>
                <h2>经典案例</h2>
                <p>司法行政案例库</p>
              </a></div>
          </div>
          <div class="van-row van-row--flex van-row--justify-space-around">
            <div class="van-col van-col--11"><a href="#/notarization"
                 class="item c8">
                <div class="icon"><i class="iconbase icon-notarization"></i></div>
                <h2>公证办理</h2>
                <p>在线办理公证业务</p>
              </a></div>
            <div class="van-col van-col--11"><a href="#/organ"
                 class="item c9">
                <div class="icon"><i class="iconbase icon-map"></i></div>
                <h2>机构查询</h2>
                <p>周边机构查询</p>
              </a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    onClickLeft () {
      this.$router.goback()
    }
  }
}
</script>

<style lang="stylus" scoped>
.app-list
  padding 0.6rem 0.2rem
  .item
    display block
    background #f8f8f8
    text-align center
    padding 0.5rem 0.3rem 0.2rem
    margin-bottom 0.3rem
    &:active
      background #e8e8e8
    .icon
      background #2d7ffc
      width 1.2rem
      height 1.2rem
      line-height 1.2rem
      margin 0 auto
      border-radius 50%
      color #fff
      text-align center
      box-shadow 0 0.1rem 0.2rem rgba(0, 0, 0, 0.15)
      .iconbase
        font-size 0.72rem
    h2
      font-size 0.32rem
      font-weight normal
      margin 0
      padding 0.2rem 0 0
      color #333
    p
      margin 0
      font-size 0.24rem
      color #999
      height 1rem
      display block
    &.c2 .icon
      background #fac306
    &.c3 .icon
      background #a17eff
    &.c4 .icon
      background #08c173
    &.c5 .icon
      background #D24D57
    &.c6 .icon
      background #0099fe
    &.c7 .icon
      background #4ac0cc
    &.c8 .icon
      background #0d7cf4
    &.c9 .icon
      background #EB7347
    &.c10 .icon
      background #D87093
  .org
    margin-left 7px
</style>
