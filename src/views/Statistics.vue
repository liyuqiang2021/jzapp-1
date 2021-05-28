<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typesList" :value.sync="type" />
    <Tabs
      class-prefix="interval"
      :data-source="intervalList"
      :value.sync="interval"
    />
    <div>
      type:{{ type }}
      <br />
      interval"{{ interval }}
    </div>
  </Layout>
</template>

// <script lang="ts">
import Vue from "vue";
import Types from "@/components/Money/Types.vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: { Tabs, Types },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = [
    { text: "按日", value: "day" },
    { text: "按月", value: "month" },
    { text: "按年", value: "year" },
  ];
  typesList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;
  &.selected {
    background: yellowgreen;
    &::after {
      display: none;
    }
  }
}

::v-deep .interval-tabs-item {
  background: white;
  &.selected {
    background: orange;
    &::after {
      display: none;
    }
  }
}
</style>