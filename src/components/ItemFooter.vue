<template>
  <div class="item-footer" v-if="list.length">
    <el-checkbox :value="isDoneAll" @change.native="toggleAll"></el-checkbox>
    <div>已办事项{{ isDoneNum }}/全部事项{{ list.length }}</div>
    <el-button size="mini" @click="clearDone">清除已办</el-button>
    <el-button size="mini" @click="clearAll">清除所有</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["list"]),
    ...mapGetters(["isDoneNum", "isDoneAll"]),
  },
  methods: {
    ...mapMutations(["clearDone", "clearAll", "toggleAll"]),
  },
};
</script>

<style lang="scss" scoped>
/* 底部状态栏 */
.item-footer {
  margin-top: 20px;
  background-color: #409eff;
  display: flex;
  align-items: center;
  padding: 10px 40px;
  color: #303133;
  /* 底部左边已办事项和代办事项 */
  div {
    flex: 1;
    margin-left: 20px;
  }
  /* 底部 右边按钮 */
  .el-button {
    margin-left: 10px;
  }
}
</style>
