<template>
  <div class="numberPad">
    <div class="out">
      <div class="output">{{ output }}</div>
    </div>
    <div class="btns">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="minus" class="minus">-</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="plus" class="plus">+</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">保存</button>
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button @click="remove">
        <Icon class="delete" name="delete" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number;
  output = this.value.toString();

  inputContent(event: MouseEvent): void {
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

  plus() {}

  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }

  minus() {}

  ok() {
    const number = parseFloat(this.output);
    this.$emit("update:value", number);
    this.$emit("submit", number);
    this.output = "0";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .out {
    position: absolute;
    top: 55px;
    background: rgb(255, 255, 255);
    z-index: 5;
    > .output {
      overflow: auto;
      width: 95vw;
      min-height: 72px;
      margin-left: 5vw;
      flex-flow: wrap;
      font-size: 40px;
      color: green;
      border-bottom: 3px solid green;
    }
  }
  .delete {
    width: 22px;
    height: 22px;
  }
  .btns {
    > button {
      @extend %clearFix;
      width: 26.66vw;
      height: 7.8vh;
      float: left;
      background: transparent;
      border: none;
      &.minus {
        height: 7.8vh;
        float: right;
        width: 20vw;
      }
      &.plus {
        height: 7.8vh;
        float: right;
        width: 20vw;
      }
      &.ok {
        height: 7.8vh * 2;
        float: right;
        width: 20vw;
        color: white;
        border-radius: 4px;
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(8),
      &:nth-child(9),
      &:nth-child(10),
      &:nth-child(11),
      &:nth-child(13),
      &:nth-child(14),
      &:nth-child(15) {
        background: linear-gradient(to bottom right, #ece9e6, #ffffff);
      }
      &:nth-child(12) {
        background: orange;
      }
    }
  }
}
</style>