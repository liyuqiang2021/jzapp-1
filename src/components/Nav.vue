<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label" />
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      记一笔
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-top: 5px solid #f9f9f9;
  background: #f9f9f9;
  .item {
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
      fill: currentColor;
    }
  }
  > .item.selected {
    color: $color-highlight;
  }
}
</style>