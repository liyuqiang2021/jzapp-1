<template>
  <div>
    <label class="fromItem">
      <span class="name">{{ this.fieldName }}</span>
      <input
        type="text"
        :value="value"
        @input="onValueChanged($event.target.value)"
        :placeholder="this.placeholder"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class FromItem extends Vue {
  @Prop({ default: "" }) readonly value!: string;
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.fromItem {
  display: block;
  display: flex;
  background: white;
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