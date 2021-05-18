<template>
  <Layout class-prefix="layout">
    <number-pad :value.sync="record.amount" @submit="saveRecord" />
    <FromItem
      fieldName="备注"
      placeholder="在此输入备注"
      @update:value="onUpdateNotes"
    />
    <tags :data-source.sync="tags" @update:value="onUpdateTags" />
    <types :value.sync="record.type" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Types from "@/components/Money/Types.vue";
import { Component, Watch } from "vue-property-decorator";
import recordListModel from "@/models/recordListModel";
import tagListModel from "../models/tagListModel";
import FromItem from "@/components/Money/FromItem.vue";

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; // 数据类型 obj | str
  createdAt?: Date; // 类 / 构造函数
};

@Component({
  components: { NumberPad, Tags, Types, FromItem },
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    recordListModel.create(this.record);
  }

  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save();
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
  background: white;
}
</style>