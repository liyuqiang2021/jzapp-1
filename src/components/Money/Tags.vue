<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag"><Icon name="other" /> 新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";

@Component
export default class Tags extends mixins(TagHelper) {
  selectedTags: string[] = [];

  get tagList() {
    return this.$store.state.tagList;
  }
  created(): void {
    this.$store.commit("fetchTags");
  }

  toggle(tag: string): void {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
  background: white;
  font-size: 14px;
  padding: 8px;
  // flex-grow: 1; //占比
  > .current {
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 12px;
      margin-right: 18px;
      &.selected {
        background: rgb(73, 211, 142);
        color: white;
      }
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
}
</style>