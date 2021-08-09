<template>
  <Layout>
    <div class="view">
      <p class="halo">欢 迎 使 用 极 简 记</p>
      <!-- <img src="/jz.png" class="halo" /> -->
      <div class="mon">
        <Icon name="money" class="money" />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
export default class Statistics extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.view {
  position: relative;
  top: 120px;
  text-align: center;
  font-size: 18px;
}
.halo {
  // color: $color-highlight;
  position: relative;
  top: -30px;
  width: 300px;
  font-size: 30px;
  margin: 0 auto;
}
.mon {
  width: 100vw;
  height: 50px;
  .money {
    position: relative;
    top: 50px;
    min-width: 50px;
    min-height: 50px;
    fill: red;
  }
}
</style>