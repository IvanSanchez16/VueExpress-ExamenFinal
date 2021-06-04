<template>
  <div>
    <b-table stripe hover :items="items" :fields="fields">
      <template #cell(actions)="data">
        <slot name="actions" :item="data"></slot>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    items: Array,
    fields: Array
  },
};
</script>

<style></style>