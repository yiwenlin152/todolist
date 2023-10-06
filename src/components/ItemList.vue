<template>
  <el-table
    :data="list"
    style="width: 100%"
    :show-header="false"
    :empty-text="'暂无待办事项'"
  >
    <el-table-column>
      <template slot-scope="scope">
        <el-checkbox
          :value="scope.row.isDone"
          @change.native="toggleIsDone(scope.row.id)"
        ></el-checkbox>
        <span
          :class="scope.row.isDone ? 'done' : ''"
          v-if="!scope.row.isEdited"
          @click="toggleIsEdited(scope.row.id)"
          >{{ scope.row.value }}</span
        >
        <input
          type="text"
          v-else
          v-focus
          :value="scope.row.value"
          @blur="toggleValue(scope.row.id, $event)"
        />
      </template>
    </el-table-column>
    <el-table-column align="right">
      <template slot-scope="scope">
        <el-button size="mini" type="danger" @click="delItem(scope.row.id)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    toggleIsEdited(id) {
      this.$store.commit("toggleIsEdited", id);
    },
    toggleValue(id, e) {
      this.$store.commit("toggleValue", { id, e });
      this.toggleIsEdited(id);
    },
    ...mapMutations(["delItem", "toggleIsDone"]),
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep.el-table td {
  padding-inline: 30px;
}
::v-deep.el-table td:first-child {
  .cell {
    display: flex;
    gap: 10px;
    span {
      flex: 1;
      /* 代办事项删除的效果 */
      &.done {
        text-decoration: line-through;
        color: #f56c6c;
      }
    }
  }
}
</style>
