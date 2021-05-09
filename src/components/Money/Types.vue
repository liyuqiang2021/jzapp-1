<template>
  <div class="heads">
    <ul class="types">
      <li class="selected">支出</li>
      <li class="selected">收入</li>
    </ul>
    <div class="out">
      <div class="output">0.00</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Types",
};
</script>

<style lang="scss" scoped>
.heads {
  .types {
    display: flex;
    position: absolute;
    top: 0;
    width: 100vw;
    background: white;
    z-index: 9;
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
  .out {
    border: 2px solid orange;
    > .output {
      position: relative;
      flex-grow: 1;
      border: 1px solid pink;
      padding: 5px;
      width: 90vw;
      margin-left: 5vw;
      margin-top: 55px;
      flex-flow: wrap;
      font-size: 40px;
      color: green;
      border-bottom: 4px solid green;
    }
  }
}
</style>