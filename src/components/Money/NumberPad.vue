<template>
  <div class="numberPad">
    <div class="btns">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <button class="ok">OK</button>
      <button>.</button>
      <button>0</button>
      <button>%</button>
      <button>/</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberPad",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
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