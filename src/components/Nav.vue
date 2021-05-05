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
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > .item {
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
    color: red;
  }
}
</style>