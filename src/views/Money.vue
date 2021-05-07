<template>
  <layout>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li class="selected">收入</li>
      </ul>
    </div>
    <div class="tags">
      <div class="output">金额显示框</div>
      <ol class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ol>
      <div class="new">
        <button>新增</button>
      </div>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" />
      </label>
    </div>
    <div class="number pad">
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
      <button>.</button>
      <button>0</button>
      <button>%</button>
      <button>/</button>
      <button>OK</button>
    </div>
  </layout>
</template>

<script lang="ts">
export default {
  name: "Money",
};
</script>