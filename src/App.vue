<template>
  <div class="main" id="body">
    <div class="menu" id="menu-frame">
      <h2>Vue2原型项目</h2>
      <input type="text" placeholder="Type to filter" @keyup="doSearch()" />
      <h4>指令</h4>
      <ul>
        <li @click="$router.push('/inputCtrlDirectives')">输入控制类</li>
      </ul>
      <h4>组件</h4>
      <ul>
        <li @click="$router.push('/timeComponents')">日期或时间类</li>
      </ul>
      <h4>过滤器</h4>
      <ul>
        <li @click="$router.push('/moneyFilters')">金额类</li>
        <li @click="$router.push('/timeFilters')">日期或时间类</li>
      </ul>
      <a href="ttps://github.com/AC-angle/Vue-prototype" target="_blank">Fork me On GitHub</a>
    </div>
    <div class="view" id="view-frame">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    doSearch() {}
  }
};
</script>
<style lang="scss" scoped>
div.main {
  font-size: 0;
  color: #555;
  font-family: inconsolata;
  line-height: 0.18rem;
  font-weight: normal;
  white-space: nowrap;
  transform-origin: 0 0;
  & > div {
    display: inline-block;
    font-size: 16px;
    white-space: normal;
    vertical-align: top;
    height: 100vh;
    overflow: auto;
    &.menu {
      width: 220px;
      padding: 0 20px 20px 20px;
      background: #fafafa;
      overflow-y: auto;
      user-select: none;
      & > h2 {
        margin-top: 30px;
        margin-bottom: 40px;
        font-size: 20px;
        text-align: center;
        color: #41b783;
        padding-top: 180px;
        background-image: url(./assets/images/AC-angle.png);
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 100% auto;
      }
      & > input {
        width: 100%;
        padding: 5px;
        font-size: 15px;
        outline: none;
        border: 1px solid #dedede;
      }
      & > h4 {
        color: #454545;
        font-size: 18px;
        margin-top: 20px;
        display: block;
      }
      & > ul {
        margin-top: 20px;
        & > li {
          color: #2194ce;
          text-decoration: none;
          line-height: 1.8em;
          cursor: pointer;
          position: relative;
        }
      }
      & > a {
        background-color: #529bcf;
        color: white;
        text-align: center;
        line-height: 30px;
        margin-top: 30px;
        cursor: pointer;
        display: block;
      }
    }
    &.view {
      width: calc(100vw - 220px);
      line-height: 2em;
    }
  }
}
</style>