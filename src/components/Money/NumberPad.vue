<template>
  <div class="numberPad">
    <div class="out">
      <div class="output">{{ output }}</div>
    </div>
    <div class="btns">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="add">+</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="delate">-</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="inputContent">*</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button>%</button>
      <button>/</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  output = "";
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent!;
    if (this.output.length === 12) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.output += input;
  }
  // add() {}
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }
  // delate() {}
  clear() {
    this.output = "0";
  }
  // ok() {}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .out {
    // border: 1px solid pink;
    position: absolute;
    top: 65px;
    background: white;
    z-index: 5;
    > .output {
      // border: 1px solid blue;
      overflow: auto;
      margin: 5px;
      width: 90vw;
      min-height: 72px;
      margin-left: 5vw;
      margin-right: 5vw;
      flex-flow: wrap;
      font-size: 40px;
      color: green;
      border-bottom: 4px solid green;
    }
  }
  .btns {
    > button {
      @extend %clearFix;
      @extend %innerShadow;
      width: 20%;
      height: 7.8vh;
      float: left;
      background: transparent;
      border: none;
      &.ok {
        height: 7.8vh * 2;
        float: right;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2),
      &:nth-child(6) {
        background: darken($bg, 4%);
      }
      &:nth-child(3),
      &:nth-child(7),
      &:nth-child(11) {
        background: darken($bg, 4% * 3);
      }
      &:nth-child(4),
      &:nth-child(8),
      &:nth-child(12),
      &:nth-child(16) {
        background: darken($bg, 4% * 6);
      }
      &:nth-child(5),
      &:nth-child(9),
      &:nth-child(13),
      &:nth-child(17) {
        background: darken($bg, 4% * 8);
      }
      &:nth-child(10),
      &:nth-child(14),
      &:nth-child(18) {
        background: darken($bg, 4% * 10);
      }
      &:nth-child(19) {
        background: darken($bg, 4% * 12);
      }
      &:nth-child(15) {
        background: orange;
      }
    }
  }
}
</style>