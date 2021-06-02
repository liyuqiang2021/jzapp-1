<template>
  <ul class="tabs" :class="{ [classPrefix + '-tabs']: classPrefix }">
    <li class="left"></li>
    <li
      v-for="item in dataSource"
      :key="item.value"
      class="tabs-item"
      :class="liClass(item)"
      @click="select(item)"
    >
      {{ item.text }}
    </li>
    <li class="right"></li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type DataSourceItem = { text: string; value: string };

@Component
export default class Tabs extends Vue {
  @Prop({ required: true, type: Array })
  dataSource!: DataSourceItem[];
  @Prop(String)
  readonly value!: string;
  @Prop(String)
  classPrefix?: string;

  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + "-tabs-item"]: this.classPrefix,
      selected: item.value === this.value,
    };
  }

  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  > .left {
    width: 20vw;
    height: 55px;
    background: white;
  }
  > .right {
    width: 20vw;
    height: 55px;
    background: white;
  }

  background: white;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 9;
  &-item {
    display: flex;
    font-weight: bold; //字体加粗
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 30vw;
    font-size: 20px;
    position: relative;
    &.selected {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #000;
      }
    }
  }
}
</style>