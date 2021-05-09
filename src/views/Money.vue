<template>
  <Layout class-prefix="layout">
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li class="selected">收入</li>
      </ul>
    </div>
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
    <div class="tags">
      <ol class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ol>
      <div class="new">
        <button>新增标签</button>
      </div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="在此输入备注" />
      </label>
    </div>
    <div class="output">0.00</div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "Money",
};
</script>

<style lang="scss">
.layout-content {
  // border: 3px solid red;
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types {
  display: flex;
  position: absolute;
  top: 0;
  width: 100vw;
  background: white;
  > li {
    display: flex;
    flex-grow: 1;
    font-weight: bold; //字体加粗
    line-height: 55px;
    height: 55px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
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
.tags {
  border: 1px solid blue;
  font-size: 14px;
  overflow: auto;
  background: #f5f5f5;
  padding-top: 5px;
  // display: flex;
  // flex-direction: column;
  > .current {
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 12px;
      margin-right: 24px;
    }
  }
  > .new {
    button {
      margin: 0 0 15px 20px;
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
  > .notes {
    display: block;
    display: flex;
    background: #f5f5f5;
    padding-left: 16px;
    font-size: 14px;
    align-items: center;
    font-weight: bold;
    flex-grow: 1;
    .name {
      padding-right: 16px;
    }
    input {
      height: 64px;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
}
.output {
  position: relative;
  border: 1px solid pink;
  margin: 10vh 15px 15px 15px;
  top: 5px;
  font-size: 40px;
  color: green;
  border-bottom: 4px solid green;
}
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