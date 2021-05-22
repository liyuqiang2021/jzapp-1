<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <FromItem
      fieldName="备注"
      placeholder="在此输入备注"
      @update:value="onUpdateNotes"
    />
    <Tags />
    <Types :value.sync="record.type" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Types from "@/components/Money/Types.vue";
import { Component } from "vue-property-decorator";
import FromItem from "@/components/Money/FromItem.vue";
import store from "@/store/index2";

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
  recordList = store.recordList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    store.createRecord(this.record);
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