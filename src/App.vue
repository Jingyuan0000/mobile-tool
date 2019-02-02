<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
.main-page
  display flex
  flex-direction column
  height 100vh
  overflow hidden
  position relative
  .container-flex
    flex 1
    background #ffffff
    flex-direction column
    overflow hidden
    -webkit-overflow-scrolling touch
    over-flow scroll
    display flex
    &.bg--grey
      background #f7f7f7
  .hts
    text-align center
    padding 0.5rem 0.3rem
    h2
      font-size 0.36rem
      font-weight normal
      margin 0 0 0.15rem
    p
      font-size 0.26rem
      color #999
      margin 0
  .chn-list
    padding 0.6rem 0.3rem
    .item
      display flex
      background #f8f8f8
      margin-bottom 0.3rem
      padding 0.5rem 0.3rem
      align-items center
      &:active
        background #e8e8e8
      .icon
        width 1rem
        height 1rem
        border-radius 50%
        flex-shrink 0
        margin-right 0.3rem
        display flex
        justify-content center
        align-items center
        &.c1
          background #08c173
        &.c2
          background #2d7ffc
        &.c3
          background #fac306
        .iconbase
          font-size 0.72rem
          color #fff
      h2
        margin 0
        font-size 0.3rem
        font-weight normal
      p
        margin 0
        font-size 0.24rem
        color #999
</style>
