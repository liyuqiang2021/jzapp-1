<template>
  <div>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack" />
      <span class="title"> 编辑标签 </span>
      <span class="rightIcon" />
    </div>
    <div class="from-wrapper">
      <FromItem
        :value="currentTag.name"
        @update:value="update"
        fieldName="标签名"
        placeholder="请输入标签名"
      />
    </div>

    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import FromItem from "@/components/Money/FromItem.vue";
import Button from "@/components/Button.vue";

@Component({
  components: { Button, FromItem },
})
export default class EditLabel extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
  }
  created(): void {
    const id = this.$route.params.id;
    this.$store.commit("fetchTags");
    this.$store.commit("setCurrentTag", id);
    if (!this.currentTag) {
      this.$router.replace("/404");
    }
  }
  update(name: string): void {
    if (this.currentTag) {
      this.$store.commit("updateTag", { id: this.currentTag.id, name });
    }
  }
  remove(): void {
    if (this.currentTag) {
      this.$store.commit("removeTag", this.currentTag.id);
    }
  }
  goBack(): void {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {
    border: none;
  }
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
  border-bottom: 1px solid gainsboro;
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>