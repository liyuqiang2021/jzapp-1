<template>
  <div class="heads">
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
    <div class="out">
      <div class="output">0.00</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Types extends Vue {
  type = "-"; //+是收入，-是支出
  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.type = type;
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
  .out {
    // border: 1px solid pink;
    position: absolute;
    top: 65px;
    background: white;
    z-index: 5;
    > .output {
      // border: 1px solid blue;
      margin: 5px;
      width: 90vw;
      margin-left: 5vw;
      margin-right: 5vw;
      flex-flow: wrap;
      font-size: 40px;
      color: green;
      border-bottom: 4px solid green;
    }
  }
}
</style>