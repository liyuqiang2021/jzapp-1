<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在此输入备注" />
    </label>
  </div>
</template>

<script>
export default {
  name: "Notes",
};
</script>

<style lang="scss" scoped>
.notes {
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
</style>