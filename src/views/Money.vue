<template>
  <Layout class-prefix="layout">
    <number-pad :value.sync="record.amount" @submit="saveRecord" />
    <notes @update:value="onUpdateNotes" />
    <tags :data-source.sync="tags" @update:value="onUpdateTags" />
    <types :value.sync="record.type" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import { Component, Watch } from "vue-property-decorator";
import recordListModel from "@/models/recordListModel";
import tagListModel from "../models/tagListModel";

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
  components: { NumberPad, Tags, Types, Notes },
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
    const record2 = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>