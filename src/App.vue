<template>
  <div>
    <ToDoListHeader />
    <ItemList />
    <ItemFooter />
  </div>
</template>

<script>
// import { mainStore } from "./store";
import ToDoListHeader from "./components/ToDoListHeader.vue";
import ItemList from "./components/ItemList.vue";
import ItemFooter from "./components/ItemFooter.vue";
export default {
  components: {
    ToDoListHeader,
    ItemList,
    ItemFooter,
  },
};
</script>

<style scoped></style>
