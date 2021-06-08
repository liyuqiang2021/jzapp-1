<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <FromItem
      fieldName="备注"
      placeholder="在此输入备注"
      :value.sync="record.notes"
    />
    <Tags @update:value="record.tags = $event" />
    <Tabs :data-source="recordTypeList" :value.sync="record.type" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from "vue-property-decorator";
import FromItem from "@/components/Money/FromItem.vue";
import { RecordItem } from "@/custom";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: { NumberPad, Tags, Tabs, FromItem },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;

  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  created(): void {
    this.$store.commit("fetchRecords");
  }

  onUpdateNotes(value: string): void {
    this.record.notes = value;
  }

  saveRecord(): void {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert("请至少选择一个标签");
    }
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert("已保存");
      this.record.notes = "";
    }
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