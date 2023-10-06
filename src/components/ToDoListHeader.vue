<template>
  <div class="header">
    <h1>记事本</h1>
    <div class="box">
      <el-input v-model="input" placeholder="请输入待办事项"></el-input>
      <el-button @click.native="add">添加</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      input: "",
    };
  },
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    add() {
      if (!this.input) {
        this.input = "";
        return alert("请输入有效内容");
      }
      if (this.list.find((item) => item.value === this.input)) {
        this.input = "";
        return alert("请不要输入重复的内容");
      }
      this.addList({
        id: Date.now(),
        value: this.input,
        isDone: false,
        isEdited: false,
      });
      this.input = "";
    },
    ...mapMutations(["addList"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #409eff;
  text-align: center;
  padding: 5px 0px 10px 0px;
  color: #ffffff;
  .box {
    margin-top: 10px;
    display: flex;
    gap: 5px;
    justify-content: center;
    .el-input {
      width: 300px;
    }
  }
}
</style>
