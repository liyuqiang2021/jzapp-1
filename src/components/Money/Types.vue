<template>
  <div class="heads">
    <ul class="types">
      <li :class="value === '-' && 'selected'" @click="selectType('-')">
        支出
      </li>
      <li :class="value === '+' && 'selected'" @click="selectType('+')">
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Types extends Vue {
  @Prop() readonly value!: string;

  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.$emit("update:value", type);
  }
}
</script>

<style lang="scss" scoped>
.heads {
  margin: 0;
  padding: 0;
  .types {
    display: flex;
    position: absolute;
    top: 0;
    margin-left: 20vw;
    background: white;
    justify-content: center;
    z-index: 9;
    > li {
      display: flex;
      font-weight: bold; //字体加粗
      line-height: 55px;
      justify-content: center;
      height: 55px;
      width: 30vw;
      font-size: 20px;
      position: relative;
      flex-wrap: initial;
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
}
</style>